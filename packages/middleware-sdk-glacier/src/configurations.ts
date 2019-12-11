export interface AddGlacierApiVersionMiddlewareInputConfig {}

interface PreviouslyResolved {
  apiVersion: string;
}

export interface ResolvedAddGlacierApiVersionMiddlewareConfig {
  apiVersion: string;
}

export function resolveSsecMiddlewareConfig<T>(
  input: T & PreviouslyResolved & AddGlacierApiVersionMiddlewareInputConfig
): T & ResolvedAddGlacierApiVersionMiddlewareConfig {
  return {
    ...input
  };
}
