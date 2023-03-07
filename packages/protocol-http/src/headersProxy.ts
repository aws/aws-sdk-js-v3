import { HeaderBag } from "@aws-sdk/types";

import { Field } from "./Field";
import { FieldPosition } from "./FieldPosition";
import { Fields } from "./Fields";

/**
 * Creates a proxy to a {@link Fields} object that can be used like
 * a {@link HeaderBag} object. Modifying the proxy object modifies
 * the underlying {@link Fields} object.
 *
 * @param fields {@link Fields} to proxy.
 * @returns Proxy to the given {@link Fields} object.
 * @internal To \@aws-sdk/protocol-http package.
 */
export const getHeadersProxy = (fields: Fields): HeaderBag => {
  // The proxy target is the object that is expected by a user of the proxy.
  // This means the proxy only has to worry about mutating operations to update
  // the proxied object.
  const headers: HeaderBag = fieldsToHeaders(fields);
  return new Proxy(headers, {
    set(target: HeaderBag, property: string, newValue: string) {
      if (newValue == null) return true; // Ignore null or undefined values.
      Reflect.set(target, property, newValue);
      const field = new Field({ name: property, values: headerValueToFieldValues(newValue) });
      fields.setField(field);
      return true;
    },
    defineProperty(target: HeaderBag, property: string, attributes: PropertyDescriptor) {
      const { configurable, enumerable, writable, value } = attributes;
      // Only add a field if defineProperty is being used for normal property addition, and the value is defined.
      // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description
      if (configurable && enumerable && writable && value != null) {
        Reflect.defineProperty(target, property, attributes);
        const field = new Field({ name: property, values: headerValueToFieldValues(value) });
        fields.setField(field);
      }
      return true;
    },
    deleteProperty(target: HeaderBag, property: string) {
      Reflect.deleteProperty(target, property);
      fields.removeField(property);
      return true;
    },
  });
};

/**
 * Creates a new {@link Fields} with header fields populated using the given
 * {@link HeaderBag}. Ignores header keys with null or undefined values.
 *
 * @param headers Headers to get as {@link Fields}.
 * @returns A {@link Fields} populated with the given headers.
 * @internal To \@aws-sdk/protocol-http package.
 */
export const headersToFields = (headers: HeaderBag): Fields => {
  return Fields.from(
    Object.entries(headers)
      .filter(([, value]) => value != null)
      .map(([key, value]) => ({ name: key, values: headerValueToFieldValues(value), kind: FieldPosition.HEADER }))
  );
};

/**
 * Creates a new {@link HeaderBag} populated using the header fields in the
 * given {@link Fields}.
 *
 * @param fields {@link Fields} to get as {@link HeaderBag}.
 * @returns A {@link HeaderBag} populated with the given fields.
 * @internal To \@aws-sdk/protocol-http package.
 */
export const fieldsToHeaders = (fields: Fields): HeaderBag => {
  return fields
    .getByType(FieldPosition.HEADER)
    .reduce((headers, field) => ({ ...headers, [field.name]: field.values.join(",") }), {});
};

/**
 * Converts a header value into a list of field values. Ignores null and
 * undefined values. Stringifies non-string values using String().
 *
 * @param headerValue Header value to convert.
 * @returns A list of values or undefined if the given value was not defined.
 * @internal To \@aws-sdk/protocol-http package.
 */
export const headerValueToFieldValues = (headerValue: string): string[] | undefined => {
  if (headerValue == null) return undefined;
  return String(headerValue).split(",");
};
