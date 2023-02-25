import { HttpAuthDefinition, Pluggable } from "@aws-sdk/types";

import { apiKeyMiddleware, apiKeyMiddlewareOptions } from "./apiKeyMiddleware";
import { ApiKeyResolvedConfig } from "./configurations";

export const getApiKeyPlugin = (
  pluginConfig: ApiKeyResolvedConfig,
  middlewareConfig: HttpAuthDefinition
): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(apiKeyMiddleware(pluginConfig, middlewareConfig), apiKeyMiddlewareOptions);
  },
});
