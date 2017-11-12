import {
    ConfigurationDefinition,
    MiddlewareStack
} from '@aws/types';

export type IndexedObject = {[key: string]: any};

export function resolveConfiguration<T extends IndexedObject, R extends T>(
    providedConfiguration: T,
    configurationDefinition: ConfigurationDefinition<T>,
    middlewareStack: MiddlewareStack<any>
): R {
    const out = {} as Partial<R>;

    for (const property of Object.keys(configurationDefinition)) {
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
                input = defaultProvider(out);
            }
        }

        if (required && input === undefined) {
            throw new Error(
                `No input provided for required configuration parameter: ${property}`
            );
        }

        out[property] = input;

        if (apply) {
            apply(
                out[property],
                out,
                middlewareStack
            );
        }
    }

    return out as R;
}
