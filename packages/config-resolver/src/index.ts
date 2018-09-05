import {
    ConfigApplicator,
    ConfigurationDefinition,
    MiddlewareStack
} from '@aws/types';

export type IndexedObject = {[key: string]: any};

export function resolveConfiguration<
    T extends IndexedObject,
    R extends T,
    Input extends object,
    Output extends object,
    Stream = Uint8Array
>(
    providedConfiguration: T,
    configurationDefinition: ConfigurationDefinition<T, R>,
    middlewareStack: MiddlewareStack<Input, Output, Stream>
): R {
    const out: Partial<R> = {};
    const applicators: Array<ConfigApplicator<R>> = [];

    // Iterate over the definitions own keys, using getOwnPropertyNames to
    // guarantee insertion order is preserved.
    // @see https://www.ecma-international.org/ecma-262/6.0/#sec-ordinary-object-internal-methods-and-internal-slots-ownpropertykeys
    for (const property of Object.getOwnPropertyNames(configurationDefinition)) {
        const {
            required,
            defaultValue,
            defaultProvider,
            normalize,
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
        } else if (normalize) {
            input = normalize(input, out);
        }

        out[property] = input;

        if (apply) {
            applicators.push(apply);
        }
    }

    applicators.forEach(func => func(out as R, middlewareStack));
    return out as R;
}
