import { EndpointDiscoveryMiddlewareConfig } from "./getEndpointDiscoveryPlugin";
import { EndpointDiscoveryResolvedConfig, PreviouslyResolved } from "./resolveEndpointDiscoveryConfig";

export interface UpdateDiscoveredEndpointInCacheOptions extends EndpointDiscoveryMiddlewareConfig {
  cacheKey: string;
  commandName: string;
  endpointDiscoveryCommandCtor: new (comandConfig: any) => any;
}

const requestQueue: { [key: string]: { resolve: Function; reject: Function }[] } = {};

export const updateDiscoveredEndpointInCache = async (
  config: EndpointDiscoveryResolvedConfig & PreviouslyResolved,
  options: UpdateDiscoveredEndpointInCacheOptions
) =>
  new Promise<void>((resolve, reject) => {
    const { endpointCache } = config;
    const { cacheKey, commandName, identifiers } = options;

    const endpoints = endpointCache.get(cacheKey);

    if (endpoints && endpoints.length === 1 && endpoints[0].Address === "") {
      // Endpoint operation already in-flight.
      // Add request to request queue only if discovered endpoint is required.
      if (options.isDiscoveredEndpointRequired) {
        if (!requestQueue[cacheKey]) requestQueue[cacheKey] = [];
        requestQueue[cacheKey].push({ resolve, reject });
      } else {
        resolve();
      }
    } else if (endpoints && endpoints.length > 0) {
      // Endpoint record is present in cache.
      resolve();
    } else {
      // put in a placeholder for endpoints already requested, prevent
      // too much in-flight calls.
      const placeholderEndpoints = [{ Address: "", CachePeriodInMinutes: 1 }];
      endpointCache.set(cacheKey, placeholderEndpoints);

      const command = new options.endpointDiscoveryCommandCtor({
        Operation: commandName.substr(0, commandName.length - 7), // strip "Command"
        Identifiers: identifiers,
      });
      const handler = command.resolveMiddleware(options.clientStack, config, options.options);
      handler(command)
        .then((result: any) => {
          endpointCache.set(cacheKey, result.output.Endpoints);
          if (requestQueue[cacheKey]) {
            requestQueue[cacheKey].forEach(({ resolve }) => {
              resolve();
            });
            delete requestQueue[cacheKey];
          }
          resolve();
        })
        .catch((error: any) => {
          if (error.name === "InvalidEndpointException" || error.$metadata?.httpStatusCode === 421) {
            // Endpoint is invalid, delete the cache entry.
            endpointCache.delete(cacheKey);
          }

          const errorToThrow = Object.assign(
            new Error(
              `The operation to discover endpoint failed.` +
                ` Please retry, or provide a custom endpoint and disable endpoint discovery to proceed.`
            ),
            { reason: error }
          );

          //fail all the pending requests in batch
          if (requestQueue[cacheKey]) {
            requestQueue[cacheKey].forEach(({ reject }) => {
              reject(errorToThrow);
            });
            delete requestQueue[cacheKey];
          }

          if (options.isDiscoveredEndpointRequired) {
            reject(errorToThrow);
          } else {
            // Endpoint Discovery is optional. No error needs to be thrown.
            // Set placeHolder endpoint to disable refresh for one minute.
            endpointCache.set(cacheKey, placeholderEndpoints);
            resolve();
          }
        });
    }
  });
