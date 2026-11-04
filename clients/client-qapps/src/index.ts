// smithy-typescript generated code
/* eslint-disable */
/**
 * The Amazon Q Apps feature capability within Amazon Q Business allows web experience users to create lightweight, purpose-built AI apps to fulfill specific tasks from within their web experience. For example, users can create a Q App that exclusively generates marketing-related content to improve your marketing team's productivity or a Q App for writing customer emails and creating promotional content using a certain style of voice, tone, and branding. For more information on the capabilities, see [Amazon Q Apps capabilities](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/deploy-experience-iam-role.html#q-apps-actions) in the *Amazon Q Business User Guide*.
 *
 * For an overview of the Amazon Q App APIs, see [Overview of Amazon Q Apps API operations](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_Operations_QApps.html).
 *
 * For information about the IAM access control permissions you need to use the Amazon Q Apps API, see [IAM role for the Amazon Q Business web experience including Amazon Q Apps](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/deploy-experience-iam-role.html) in the *Amazon Q Business User Guide*.
 *
 * @packageDocumentation
 */
export * from "./QAppsClient";
export * from "./QApps";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { QAppsExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { QAppsServiceException } from "./models/QAppsServiceException";
