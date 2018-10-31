import { TreeModel } from './TreeModel';
import { Step } from '@aws-sdk/types';

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
}

export interface ConfigurationPropertyDefinitionSharedAttributes {
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

    /**
     * Whether this property represents internal state about an SDK client that
     * is not meant to be controlled by users of that client.
     *
     * If `true`, the property will not appear in the client's configuration
     * interface but will appear in the client's resolved configuration
     * interface.
     */
    internal?: boolean;
}

export interface ConfigurationPropertyDefinitionRuntimeAttributes {
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
     * function that will normalize user input to a subtype of the allowed input
     * type union.
     *
     * This function will be called with the supplied input and the full
     * configuration object at its current point in processing. The function
     * must return the normalized input.
     *
     * This function will not be called if the user did not supply a value.
     *
     * If an imported type is used, it must be referred to as a property of the
     * imported package.
     */
    normalize?: string;

    /**
     * A string containing a valid TypeScript expression that evaluates to a
     * function that, when called, will react to the value supplied for this
     * configuration property. Examples of actions taken during `apply` handlers
     * include altering the configuration object or the client middleware stack.
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

export type RuntimeTarget = 'node'|'browser'|'universal';

export interface EnvironmentForkedConfigurationPropertyDefinition extends
    ConfigurationPropertyDefinitionSharedAttributes
{
    type: 'forked';

    /**
     * The generation configuration to apply when creating an SDK for a Node.JS
     * runtime environment.
     */
    node: ConfigurationPropertyDefinitionRuntimeAttributes & AdditionalDocumentation;

    /**
     * The generation configuration to apply when creating an SDK for a browser
     * runtime environment.
     */
    browser: ConfigurationPropertyDefinitionRuntimeAttributes & AdditionalDocumentation;

    /**
     * The generation configuration to apply when creating an SDK for an
     * isomorphic runtime environment.
     */
    universal: ConfigurationPropertyDefinitionRuntimeAttributes & AdditionalDocumentation;
}

export interface UnifiedConfigurationPropertyDefinition extends
    ConfigurationPropertyDefinitionSharedAttributes,
    ConfigurationPropertyDefinitionRuntimeAttributes
{
    type: 'unified';
}

export type ConfigurationPropertyDefinition =
    UnifiedConfigurationPropertyDefinition |
    EnvironmentForkedConfigurationPropertyDefinition;

export interface ConfigurationDefinition {
    [key: string]: ConfigurationPropertyDefinition;
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
    configuration: ConfigurationDefinition;
}

export interface ServiceCustomizationDefinition {
    /**
     * The customization definitions that should be applied to a service client.
     */
    client: Array<CustomizationDefinition>;

    /**
     * The customization definitions that should be applied to individual
     * operations within a service client.
     */
    commands: {
        [commandName: string]: Array<CustomizationDefinition>;
    }
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
     * An expression that should evaluate to a boolean that will determine if
     * the middleware is injected into the stack. This will be evaluated after
     * all configuration has been resolved; the configuration can be
     * dereferenced as `this.config`.
     */
    conditionExpression?: string;

    /**
     * Any configuration necessary for this middleware to be resolved.
     */
    configuration?: ConfigurationDefinition;

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
    configuration?: ConfigurationDefinition;

    /**
     * Packages that must be imported to use this parser decorator.
     * Packages will be imported using the `import * as ${snake_case_package_name} from 'package-name';`
     * syntax.
     */
    imports?: Array<Import>;
}

export interface SyntheticParameterCustomizationDefinition {
    type: 'SyntheticParameter';

    /**
     * The I/O shape on which this synthetic parameter should be applied.
     */
    location: 'input'|'output';

    /**
     * The name of the property to be added to the operation's input or output
     * shape. For client-side only parameters, the first character should
     * typically be `$` to avoid any clashes with service parameters.
     */
    name: string;

    /**
     * Will be used as the type annotation for this property.
     *
     * Must be a symbol resolvable by the TypeScript compiler.
     *
     * If an imported type is used, it must be referred to as a property of the
     * imported package.
     */
    typeExpression: string;

    /**
     * The documentation string that should be injected for this property.
     * Should be in standard JSDoc format and expect to be indented by 4 spaces.
     */
    documentation: string;

    /**
     * Whether this input parameter must be provided by the user.
     */
    required?: boolean;

    /**
     * Packages that must be imported to use this property.
     * Packages will be imported using the `import * as ${snake_case_package_name} from 'package-name';`
     * syntax.
     */
    imports?: Array<Import>;
}

export interface ParameterSuppressionCustomizationDefinition {
    type: 'ParameterSuppression';

    /**
     * The I/O shape from which this parameter should be suppressed.
     */
    location: 'input'|'output';

    /**
     * The name of the property to be suppressed. The property will be removed
     * from the input or output shape interface, but the underlying
     * serialization will not be changed.
     */
    name: string;
}

export type CustomizationDefinition =
    ConfigCustomizationDefinition |
    MiddlewareCustomizationDefinition |
    ParserDecoratorCustomizationDefinition |
    SyntheticParameterCustomizationDefinition |
    ParameterSuppressionCustomizationDefinition;

/**
 * A function that, given a service model and runtime target, returns an array
 * of customizations to apply to the service.
 */
export interface CustomizationProvider {
    (
        model: TreeModel,
        target: RuntimeTarget
    ): ServiceCustomizationDefinition;
}
