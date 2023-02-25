import { HttpRequest } from "@aws-sdk/protocol-http";
import {
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  FinalizeRequestMiddleware,
  HandlerExecutionContext,
  HttpAuthDefinition,
  RelativeMiddlewareOptions,
} from "@aws-sdk/types";

import { ApiKeyResolvedConfig } from "./configurations";

export const apiKeyMiddlewareOptions: RelativeMiddlewareOptions = {
  name: "apiKeyMiddleware",
  tags: ["APIKEY", "AUTH"],
  relation: "after",
  toMiddleware: "retryMiddleware",
  override: true,
};

/**
 * Middleware to inject the API key into the HTTP request.
 *
 * The middleware will inject the client's configured API key into the
 * request as defined by the `@httpApiKeyAuth` trait. If the trait says to
 * put the API key into a named header, that header will be used, optionally
 * prefixed with a scheme. If the trait says to put the API key into a named
 * query parameter, that query parameter will be used.
 *
 * @param pluginConfig the client configuration. Includes the function that will return the API key value.
 * @param middlewareConfig the plugin options (location of the parameter, name, and optional scheme)
 * @returns a function that processes the HTTP request and passes it on to the next handler
 */
export const apiKeyMiddleware =
  <Input extends object, Output extends object>(
    pluginConfig: ApiKeyResolvedConfig,
    middlewareConfig: HttpAuthDefinition
  ): FinalizeRequestMiddleware<Input, Output> =>
  (next: FinalizeHandler<Input, Output>, context: HandlerExecutionContext): FinalizeHandler<Input, Output> =>
    async function (args: FinalizeHandlerArguments<Input>): Promise<FinalizeHandlerOutput<Output>> {
      if (!HttpRequest.isInstance(args.request) || context.currentAuthConfig) return next(args);

      const apiKey = pluginConfig.identity && (await pluginConfig.identity());

      // This middleware will not be injected if the operation has the @optionalAuth trait.
      // We don't know if we're the only auth middleware, so let the service deal with the
      // absence of the API key (or let other middleware do its job).
      if (!apiKey) {
        context.currentAuthConfig = undefined;
        return next(args);
      }
      context.currentAuthConfig = middlewareConfig;

      if (middlewareConfig.in === "header") {
        // Set the header, even if it's already been set.
        args.request.headers[middlewareConfig.name.toLowerCase()] = middlewareConfig.scheme
          ? `${middlewareConfig.scheme} ${apiKey.token}`
          : apiKey.token;
      } else if (middlewareConfig.in === "query") {
        // Set the query parameter, even if it's already been set.
        args.request.query[middlewareConfig.name] = apiKey.token;
      }

      return next(args);
    };
