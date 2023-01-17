// TODO(identityandauth): Should this be moved to signerMiddleware, as no additional operations are
// needed in addition to resolving identity?

import { HttpRequest } from "@aws-sdk/protocol-http";
import {
  AuthScheme,
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  FinalizeRequestMiddleware,
  HandlerExecutionContext,
  Identity,
  RelativeMiddlewareOptions,
  TokenIdentity,
} from "@aws-sdk/types";

import { IdentityInputConfig, IdentityPreviouslyResolved, IdentityResolvedConfig } from "./configurations";
import { isAwsCredentialIdentity } from "./util/identity/isAwsCredentialIdentity";
import { isLoginIdentity } from "./util/identity/isLoginIdentity";
import { isTokenIdentity } from "./util/identity/isTokenIdentity";
import { getDateHeader } from "./util/time/getDateHeader";
import { getSkewCorrectedDate } from "./util/time/getSkewCorrectedDate";
import { getUpdatedSystemClockOffset } from "./util/time/getUpdatedSystemClockOffset";

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
  (next: FinalizeHandler<Input, Output>): FinalizeHandler<Input, Output> =>
  async (args: FinalizeHandlerArguments<Input>): Promise<FinalizeHandlerOutput<Output>> => {
    // This would be a mix of awsAuthMiddleware and tokenMiddleware
    // and use isToken and isCredentials checks to take appropriate actions.
    if (!HttpRequest.isInstance(args.request)) return next(args);

    const identity = await options.identity();

    if (isTokenIdentity(identity)) {
      const tokenIdentity: TokenIdentity = identity as TokenIdentity;
      args.request.headers["Authorization"] = `Bearer ${tokenIdentity.token}`;
      return next(args);
    }

    if (isAwsCredentialIdentity(identity)) {
      // signer resolved elsewhere
    }

    return next(args);
  };
