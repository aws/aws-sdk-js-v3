import {Provider} from "@aws-sdk/types";

/**
 *
 * Decorates a provider function with either static memoization.
 *
 * To create a statically memoized provider, supply a provider as the only
 * argument to this function. The provider will be invoked once, and all
 * invocations of the provider returned by `memoize` will return the same
 * promise object.
 *
 * @param provider The provider whose result should be cached indefinitely.
 */
export function memoize<T>(provider: Provider<T>): Provider<T>;

/**
 * Decorates a provider function with refreshing memoization.
 *
 * @param provider          The provider whose result should be cached.
 * @param isExpired         A function that will evaluate the resolved value and
 *                          determine if it is expired. For example, when
 *                          memoizing AWS credential providers, this function
 *                          should return `true` when the credential's
 *                          expiration is in the past (or very near future) and
 *                          `false` otherwise.
 * @param requiresRefresh   A function that will evaluate the resolved value and
 *                          determine if it represents static value or one that
 *                          will eventually need to be refreshed. For example,
 *                          AWS credentials that have no defined expiration will
 *                          never need to be refreshed, so this function would
 *                          return `true` if the credentials resolved by the
 *                          underlying provider had an expiration and `false`
 *                          otherwise.
 */
export function memoize<T>(
    provider: Provider<T>,
    isExpired: (resolved: T) => boolean,
    requiresRefresh?: (resolved: T) => boolean
): Provider<T>;

export function memoize<T>(
    provider: Provider<T>,
    isExpired?: (resolved: T) => boolean,
    requiresRefresh?: (resolved: T) => boolean
): Provider<T> {
    if (isExpired === undefined) {
        // This is a static memoization; no need to incorporate refreshing
        const result = provider();
        return () => result;
    }

    let result = provider();
    let isConstant: boolean = false;

    return () => {
        if (isConstant) {
            return result;
        }

        return result.then(resolved => {
            if (requiresRefresh && !requiresRefresh(resolved)) {
                isConstant = true;
                return resolved;
            }

            if (isExpired(resolved)) {
                return result = provider();
            }

            return resolved;
        });
    }
}
