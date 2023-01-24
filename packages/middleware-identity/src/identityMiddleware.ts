import { HttpRequest } from "@aws-sdk/protocol-http";
import {
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  FinalizeRequestMiddleware,
  HandlerExecutionContext,
  RelativeMiddlewareOptions,
} from "@aws-sdk/types";

import { IdentityResolvedConfig } from "./configurations";

export const IdentityMiddlewareOptions: RelativeMiddlewareOptions = {
  name: "identityMiddleware",
  tags: ["IDENTITY"],
  relation: "after",
  toMiddleware: "retryMiddleware",
  override: true,
};

export const identityMiddleware =
  <Input extends object, Output extends object>(
    options: IdentityResolvedConfig
  ): FinalizeRequestMiddleware<Input, Output> =>
  (next: FinalizeHandler<Input, Output>, context: HandlerExecutionContext): FinalizeHandler<Input, Output> =>
  async (args: FinalizeHandlerArguments<Input>): Promise<FinalizeHandlerOutput<Output>> => {
    if (!HttpRequest.isInstance(args.request)) return next(args);

    // Map AuthScheme ID to AuthScheme
    const authSchemeMap = {};
    for (const authScheme of options.authSchemes) {
      authSchemeMap[authScheme.schemeId] = authScheme;
    }

    // Get HttpOptions
    // - schemeId
    // - identityProperties
    // - signerProperties
    const potentialAuthParameters = options.authSchemeProvider(options);

    // Filter out any HttpAuthOptions that don't map to AuthSchemes
    const supportedAuthParameters = potentialAuthParameters.filter((authParam) => authSchemeMap[authParam.schemeId]);

    // Choose the first supported scheme option (undefined if empty)
    const schemeOption = supportedAuthParameters.length > 0 ? supportedAuthParameters[0] : undefined;
    if (schemeOption === undefined) {
      throw new Error(`AuthScheme could not be resolved`);
    }

    // Get AuthScheme based on first HttpAuthOption
    const authScheme = authSchemeMap[schemeOption.schemeId];

    // Handle identityProperties
    const identityProperties = {
      ...schemeOption.identityProperties,
      ...options.identityProperties,
    };

    // Handle signerProperties
    const signerProperties = {
      ...schemeOption.signerProperties,
      ...options.signingProperties,
      ...context,
      authScheme,
    };

    // Get IdentityProvider from IdentityResolver
    const identityProvider = await authScheme.identity(identityProperties);

    // Get Identity from IdentityProvider
    const identity = await identityProvider(identityProperties);

    // Get Signer from AuthScheme
    const signer = await authScheme.signer();

    // Sign Request
    const request = signer.sign(args.request, identity, signerProperties);

    return next({
      ...args,
      request,
    });
  };
