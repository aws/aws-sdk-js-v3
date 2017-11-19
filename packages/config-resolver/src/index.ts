import {
    ConfigurationDefinition,
    MiddlewareStack
} from '@aws/types';

export type IndexedObject = {[key: string]: any};

export function resolveConfiguration<T extends IndexedObject, R extends T>(
    providedConfiguration: T,
    configurationDefinition: ConfigurationDefinition<T, R>,
    middlewareStack: MiddlewareStack<any, any, any>
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
            apply
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
        }

        out[property] = input;

        if (apply) {
            apply(
                input,
                out as R,
                middlewareStack
            );
        }
    }

    return out as R;
}
