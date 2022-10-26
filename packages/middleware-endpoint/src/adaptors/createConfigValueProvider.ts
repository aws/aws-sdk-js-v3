import { Endpoint, EndpointV2 } from "@aws-sdk/types";

/**
 * Normalize some key of the client config to an async provider.
 * @private
 *
 * @param configKey - the key to look up in config.
 * @param canonicalEndpointParamKey - this is the name the EndpointRuleSet uses.
 *                                    it will most likely not contain the config
 *                                    value, but we use it as a fallback.
 * @param config - container of the config values.
 *
 * @returns async function that will resolve with the value.
 */
export const createConfigValueProvider = <Config extends Record<string, unknown>>(
  configKey: string,
  canonicalEndpointParamKey: string,
  config: Config
) => {
  const configProvider = async () => {
    const configValue: unknown = config[configKey] ?? config[canonicalEndpointParamKey];
    if (typeof configValue === "function") {
      return configValue();
    }
    return configValue;
  };
  if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
    return async () => {
      const endpoint = await configProvider();
      if (endpoint && typeof endpoint === "object") {
        if ("url" in endpoint) {
          return (endpoint as EndpointV2).url.href;
        }
        if ("hostname" in endpoint) {
          const { protocol, hostname, port, path } = endpoint as Endpoint;
          // query params are ignored in setting endpoint.
          return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
        }
      }
      return endpoint;
    };
  }
  return configProvider;
};
