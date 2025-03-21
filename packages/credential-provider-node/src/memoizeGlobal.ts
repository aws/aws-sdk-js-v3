import { memoize } from "@smithy/property-provider";
import { AwsCredentialIdentity } from "@smithy/types";

const globalProviderCache: Map<string, () => Promise<AwsCredentialIdentity>> = new Map();

function hashProvider(provider: () => Promise<AwsCredentialIdentity>, config?: string): string {
  return config || provider.name || Math.random().toString(36).substring(7);
}

export function memoizeGlobal<T extends AwsCredentialIdentity>(
  provider: () => Promise<T>,
  isExpired: (resolved: T) => boolean,
  requiresRefresh?: (resolved: T) => boolean,
  cacheKey?: string
): () => Promise<T> {
  const key = hashProvider(provider, cacheKey);
  const cached = globalProviderCache.get(key);
  if (cached) {
    return cached as () => Promise<T>;
  }

  const memoized = memoize(provider, isExpired, requiresRefresh);
  const wrappedProvider = async () => {
    try {
      const creds = await memoized();
      if (isExpired(creds)) {
        globalProviderCache.delete(key);
        // Force memoize to refresh by calling provider directly
        return await provider();
      }
      return creds;
    } catch (error) {
      globalProviderCache.delete(key);
      throw error;
    }
  };

  globalProviderCache.set(key, wrappedProvider);
  return wrappedProvider;
}

export function clearDefaultProviderCache(): void {
  globalProviderCache.clear();
}
