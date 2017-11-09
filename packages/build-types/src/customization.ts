import {Step} from '@aws/types';

export interface DefaultValue {
    type: 'value';

    /**
     * A string containing a valid TypeScript expression that evaluates to a
     * valid value for this configuration property.
     *
     * If an imported type is used, it must be referred to as a property of the
     * imported package.
     */
    expression: string;

    /**
     * Packages that must be imported to use this configuration property.
     * Packages will be imported using the `import * as ${snake_case_package_name} from 'package-name';`
     * syntax.
     */
    imports?: Array<Import>;
}

export interface DefaultProvider {
    type: 'provider';

    /**
     * A string containing a valid TypeScript expression that evaluates to a
     * function that, when called, will return a valid value for this
     * configuration property.
     *
     * This function will be called with the full configuration object at its
     * current point in processing.
     *
     * If an imported type is used, it must be referred to as a property of the
     * imported package.
     */
    expression: string;

    /**
     * Packages that must be imported to use this configuration property.
     * Packages will be imported using the `import * as ${snake_case_package_name} from 'package-name';`
     * syntax.
     */
    imports?: Array<Import>;
}

export interface ConfigPropertyGenerationConfiguration {
    /**
     * Whether the user must supply a value for this property.
     */
    required: boolean;

    /**
     * Packages that must be imported to use this configuration property.
     * Packages will be imported using the `import * as ${snake_case_package_name} from 'package-name';`
     * syntax.
     */
    imports?: Array<Import>;

    /**
     * The default (if any) to use should the user not supply a value for this
     * property.
     */
    default?: DefaultValue|DefaultProvider;

    /**
     * A string containing a valid TypeScript expression that evaluates to a
     * function that, when called, will react to the value supplied for this
     * configuration property. Examples of actions taken during `apply` handlers
     * include normalizing a type, altering the configuration object, and
     * altering the client middleware stack.
     *
     * This function will be called with the full configuration object at its
     * current point in processing.
     *
     * If an imported type is used, it must be referred to as a property of the
     * imported package.
     */
    apply?: string;
}

export interface AdditionalDocumentation {
    /**
     * A documentation string to append to the general configuration property
     * documentation.
     */
    additionalDocumentation?: string;
}

export interface ConfigurationPropertyDefinition {
    /**
     * The documentation string that should be injected over this configuration
     * property. Should be in standard JSDoc format and expect to be indented by
     * 4 spaces.
     */
    documentation: string;

    /**
     * Will be used as the `InputType` type parameter to the generated
     * `ConfigurationPropertyDefinition` for this configuration property.
     *
     * Must be a symbol resolvable by the TypeScript compiler.
     *
     * If an imported type is used, it must be referred to as a property of the
     * imported package.
     */
    inputType: string;
    
    /**
     * The type to which this property will be normalized. It should only be
     * specified if different from the property's inputType (in which case it
     * must be a subtype thereof).
     *
     * Must be a symbol resolvable by the TypeScript compiler.
     *
     * If an imported type is used, it must be referred to as a property of the
     * imported package.
     */
    resolvedType?: string;

    /**
     * Packages that must be imported to use this configuration property.
     * Packages will be imported using the `import * as ${snake_case_package_name} from 'package-name';`
     * syntax.
     */
    imports?: Array<Import>;
}

export type RuntimeTarget = 'node'|'browser'|'universal';

export type EnvironmentForkedConfigurationPropertyGenerationConfiguration =
    ConfigurationPropertyDefinition &
    {type: 'forked';} &
    {
        /**
         * The generation configuration to apply when creating an SDK for a
         * particular runtime environment.
         */
        [key in RuntimeTarget]: ConfigPropertyGenerationConfiguration & 
            AdditionalDocumentation;
    };

export type UnifiedConfigurationPropertyGenerationConfiguration =
    ConfigurationPropertyDefinition &
    ConfigPropertyGenerationConfiguration &
    {type: 'unified';};

export type ConfigurationPropertyGenerationConfiguration = 
    UnifiedConfigurationPropertyGenerationConfiguration |
    EnvironmentForkedConfigurationPropertyGenerationConfiguration;

export interface ConfigurationGenerationConfiguration {
    [key: string]: ConfigurationPropertyGenerationConfiguration;
}

// In the generator, collect these into a Map<string, Set<string>> and evaluate
// version ranges to ensure they overlap using require('semver').intersects and
// then join them into a single range for the package.json file
export interface Import {
    /**
     * The name of the package to import (as would be used with `npm install`).
     */
    package: string;

    /**
     * The version constraint to require. This value should use standard semver
     * notation with the caveat that "or" operators (`||`) are not permitted.
     */
    version: string;
}

export interface ConfigCustomizationDefinition {
    type: 'Configuration';
    configuration: ConfigurationGenerationConfiguration;
}

export interface MiddlewareCustomizationDefinition {
    type: 'Middleware';

    /**
     * The step in which to inject the middleware.
     */
    step: Step;

    /**
     * The priority within the specified step with which the middleware should
     * be executed.
     */
    priority: number;

    /**
     * An expression that resolves to a set of tags to apply to this middleware.
     */
    tags?: string;

    /**
     * An expression that resolves to the middleware to inject.
     */
    expression: string;

    /**
     * Any configuration necessary for this middleware to be resolved.
     */
    configuration?: ConfigurationGenerationConfiguration;

    /**
     * Packages that must be imported to use this middleware.
     * Packages will be imported using the `import * as ${snake_case_package_name} from 'package-name';`
     * syntax.
     */
    imports?: Array<Import>;
}

/**
 * Parser decorators apply an action before the SDK attempts to unmarshall the
 * response.
 */
export interface ParserDecoratorCustomizationDefinition {
    type: 'ParserDecorator';

    /**
     * The relative priority of this decorator relative to other decorators.
     * Used during client generation to order decorator application.
     */
    priority: number;

    /**
     * An expression that resolves to the decorator with which to wrap the
     * parser.
     */
    expression: string;

    /**
     * Any configuration necessary for this middleware to be resolved.
     */
    configuration?: ConfigurationGenerationConfiguration;

    /**
     * Packages that must be imported to use this parser decorator.
     * Packages will be imported using the `import * as ${snake_case_package_name} from 'package-name';`
     * syntax.
     */
    imports?: Array<Import>;
}

export type CustomizationDefinition =
    ConfigCustomizationDefinition |
    MiddlewareCustomizationDefinition |
    ParserDecoratorCustomizationDefinition;
