// smithy-typescript generated code
/* eslint-disable */
/**
 * Cloud9
 *
 * Cloud9 is a collection of tools that you can use to code, build, run, test, debug, and release software in the cloud.
 *
 * For more information about Cloud9, see the [Cloud9 User Guide](https://docs.aws.amazon.com/cloud9/latest/user-guide).
 *
 * > **Important:** Cloud9 is no longer available to new customers. Existing customers of Cloud9 can continue to use the service as normal. [Learn more"](http://aws.amazon.com/blogs/devops/how-to-migrate-from-aws-cloud9-to-aws-ide-toolkits-or-aws-cloudshell/)
 *
 * Cloud9 supports these operations:
 *
 * - `CreateEnvironmentEC2`: Creates an Cloud9 development environment, launches an Amazon EC2 instance, and then connects from the instance to the environment.
 * - `CreateEnvironmentMembership`: Adds an environment member to an environment.
 * - `DeleteEnvironment`: Deletes an environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.
 * - `DeleteEnvironmentMembership`: Deletes an environment member from an environment.
 * - `DescribeEnvironmentMemberships`: Gets information about environment members for an environment.
 * - `DescribeEnvironments`: Gets information about environments.
 * - `DescribeEnvironmentStatus`: Gets status information for an environment.
 * - `ListEnvironments`: Gets a list of environment identifiers.
 * - `ListTagsForResource`: Gets the tags for an environment.
 * - `TagResource`: Adds tags to an environment.
 * - `UntagResource`: Removes tags from an environment.
 * - `UpdateEnvironment`: Changes the settings of an existing environment.
 * - `UpdateEnvironmentMembership`: Changes the settings of an existing environment member for an environment.
 *
 * @packageDocumentation
 */
export * from "./Cloud9Client";
export * from "./Cloud9";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { Cloud9ExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { Cloud9ServiceException } from "./models/Cloud9ServiceException";
