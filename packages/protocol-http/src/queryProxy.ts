import { QueryParameterBag } from "@aws-sdk/types";

/**
 * Creates a proxy to a {@link URLSearchParams} object that can be used like
 * a {@link QueryParameterBag} object. Modifying the proxy object modifies
 * the underlying {@link URLSearchParams} object.
 *
 * @param searchParams {@link URLSearchParams} to proxy.
 * @returns Proxy to the given {@link URLSearchParams} object.
 * @internal To \@aws-sdk/protocol-http package.
 */
export const getQueryProxy = (searchParams: URLSearchParams): QueryParameterBag => {
  // The proxy target is the object that is expected by a user of the proxy.
  // This means the proxy only has to worry about mutating operations to update
  // the proxied object.
  const query = searchParamsToQuery(searchParams);
  return new Proxy(query, {
    set(target: QueryParameterBag, property: string, newValue: string | string[]) {
      if (newValue == null) return true; // Ignore null or undefined values.
      Reflect.set(target, property, newValue);
      if (Array.isArray(newValue)) {
        searchParams.delete(property);
        newValue.forEach((value) => searchParams.append(property, value));
      } else {
        searchParams.set(property, newValue);
      }
      return true;
    },
    defineProperty(target: QueryParameterBag, property: string, attributes: PropertyDescriptor) {
      const { configurable, enumerable, writable, value } = attributes;
      // Only add a field if defineProperty is being used for normal property addition, and the value is defined.
      // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description
      if (configurable && enumerable && writable && value != null) {
        Reflect.defineProperty(target, property, attributes);
        if (Array.isArray(value)) {
          searchParams.delete(property);
          value.forEach((element) => searchParams.append(property, element));
        } else {
          searchParams.set(property, value);
        }
      }
      return true;
    },
    deleteProperty(target: QueryParameterBag, property: string) {
      Reflect.deleteProperty(target, property);
      searchParams.delete(property);
      return true;
    },
  });
};

/**
 * Creates a new {@link URLSearchParams} populated with the query parameters
 * in the given {@link QueryParameterBag}. Ignores non-string values.
 *
 * @param query Query parameters to get as {@link URLSearchParams}.
 * @returns A {@link URLSearchParams} populated with the given query parameters.
 * @internal To \@aws-sdk/protocol-http package.
 */
export const queryToSearchParams = (query: QueryParameterBag): URLSearchParams => {
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (Array.isArray(value)) {
      value.filter((element) => typeof element === "string").forEach((element) => searchParams.append(key, element));
    } else if (typeof value === "string") {
      searchParams.set(key, value);
    }
  }
  return searchParams;
};

/**
 * Creates a new {@link QueryParameterBag} populated with the query parameters
 * in the given {@link URLSearchParams}.
 *
 * @param searchParams {@link URLSearchParams} to get as {@link QueryParameterBag}.
 * @returns A {@link QueryParameterBag} populated with the given query parameters.
 * @internal To \@aws-sdk/protocol-http package.
 */
export const searchParamsToQuery = (searchParams: URLSearchParams): QueryParameterBag => {
  const query: QueryParameterBag = {};
  for (const [key, value] of searchParams.entries()) {
    const currentValue = query[key];
    if (currentValue == null) {
      query[key] = value;
    } else if (Array.isArray(currentValue)) {
      query[key] = [...currentValue, value];
    } else {
      query[key] = [currentValue, value];
    }
  }
  return query;
};
