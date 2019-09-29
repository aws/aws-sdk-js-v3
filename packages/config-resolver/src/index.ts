import { ConfigurationDefinition, MiddlewareStack } from "@aws-sdk/types";

export type IndexedObject = { [key: string]: any };

export function resolveConfiguration<T extends IndexedObject, R extends T>(
  providedConfiguration: T,
  configurationDefinition: ConfigurationDefinition<T, R>
): R {
  const out: Partial<R> = {};

  // Iterate over the definitions own keys, using getOwnPropertyNames to
  // guarantee insertion order is preserved.
  // @see https://www.ecma-international.org/ecma-262/6.0/#sec-ordinary-object-internal-methods-and-internal-slots-ownpropertykeys
  for (const property of Object.getOwnPropertyNames(configurationDefinition)) {
    const {
      required,
      defaultValue,
      defaultProvider,
      normalize
    } = configurationDefinition[property];
    let input = providedConfiguration[property];

    if (input === undefined) {
      if (defaultValue !== undefined) {
        input = defaultValue;
      } else if (defaultProvider) {
        input = defaultProvider(out as R);
      } else if (required) {
        throw new Error(
          `No input provided for required configuration parameter: ${property}`
        );
      }
    } else if (normalize) {
      input = normalize(input, out);
    }
    //@ts-ignore
    out[property] = input;
  }
  return out as R;
}
