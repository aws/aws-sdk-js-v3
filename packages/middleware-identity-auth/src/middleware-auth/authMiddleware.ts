import { HttpRequest } from "@aws-sdk/protocol-http";
import {
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  FinalizeRequestMiddleware,
  HandlerExecutionContext,
  RelativeMiddlewareOptions,
} from "@aws-sdk/types";

import { resolveAuthSchemeProvider } from "../util/resolveAuth/resolveAuthSchemeProvider";
import { resolveAuthSchemes } from "../util/resolveAuth/resolveAuthSchemes";
import { AuthResolvedConfig } from "./configurations";

/**
 * TODO(identityandauth)
 */
export const AuthMiddlewareOptions: RelativeMiddlewareOptions = {
  name: "authMiddleware",
  tags: ["AUTH"],
  relation: "after",
  toMiddleware: "retryMiddleware",
  override: true,
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
