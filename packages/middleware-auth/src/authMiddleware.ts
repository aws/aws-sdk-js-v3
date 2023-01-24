import { HttpRequest } from "@aws-sdk/protocol-http";
import {
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  FinalizeRequestMiddleware,
  HandlerExecutionContext,
  RelativeMiddlewareOptions,
} from "@aws-sdk/types";

import {
  AuthResolvedConfig,
  AuthScheme,
  AuthSchemeProvider,
  SMITHY_SDK_SUPPORTED_AUTH,
  SMITHY_SDK_SUPPPORTED_AUTH_OPTIONS,
} from "./configurations";
import { mapSchemeIdToAuthScheme } from "./util/mapSchemeIdToAuthScheme";

export const AuthMiddlewareOptions: RelativeMiddlewareOptions = {
  name: "authMiddleware",
  tags: ["AUTH"],
  relation: "after",
  toMiddleware: "retryMiddleware",
  override: true,
};

interface ResolveAuthSchemesOptions {
  context: HandlerExecutionContext;
}

/**
 * TODO
 * @param context
 */
const resolveAuthSchemes = async (options: ResolveAuthSchemesOptions): Promise<AuthScheme[]> => {
  const supportedAuthSchemes = options.context.authSchemes.filter(
    (authScheme) => SMITHY_SDK_SUPPORTED_AUTH[authScheme.name]
  );
  return supportedAuthSchemes.map((authScheme) => {
    return {
      ...authScheme,
      ...SMITHY_SDK_SUPPORTED_AUTH[authScheme.name],
    };
  });
};

interface ResolveAuthSchemeProviderOptions {
  authSchemes: AuthScheme[];
}

const resolveAuthSchemeProvider =
  async (options: ResolveAuthSchemeProviderOptions): Promise<AuthSchemeProvider<Record<string, any>>> =>
  () => {
    const supportedAuthSchemes = mapSchemeIdToAuthScheme(options.authSchemes);
    return SMITHY_SDK_SUPPPORTED_AUTH_OPTIONS.filter((authOption) => supportedAuthSchemes[authOption.schemeId]);
  };

export const authMiddleware =
  <Input extends object, Output extends object>(
    options: AuthResolvedConfig
  ): FinalizeRequestMiddleware<Input, Output> =>
  (next: FinalizeHandler<Input, Output>, context: HandlerExecutionContext): FinalizeHandler<Input, Output> =>
  async (args: FinalizeHandlerArguments<Input>): Promise<FinalizeHandlerOutput<Output>> => {
    if (!HttpRequest.isInstance(args.request)) return next(args);

    const authSchemes = options.authSchemes
      ? options.authSchemes
      : await resolveAuthSchemes({
          context,
        });

    const authSchemeProvider = options.authSchemeProvider
      ? options.authSchemeProvider
      : await resolveAuthSchemeProvider({
          authSchemes,
        });

    const output = {
      ...args,
      authSchemes,
      authSchemeProvider,
    };

    return next(output);
  };
