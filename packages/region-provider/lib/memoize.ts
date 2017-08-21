import {Provider} from "@aws/types";

/**
 * Decorates a provider function with static memoization. The underlying
 * provider will be invoked once, and all invocations of the returned provider
 * will return the same promise object.
 */
export function memoize<T>(provider: Provider<T>): Provider<T> {
    let result = provider();
    return () => result;
}
