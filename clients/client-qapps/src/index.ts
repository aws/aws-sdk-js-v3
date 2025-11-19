// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>The Amazon Q Apps feature capability within Amazon Q Business allows web experience users to create lightweight, purpose-built AI apps to fulfill specific tasks from within their web experience. For example, users can create a Q App that exclusively generates marketing-related content to improve your marketing team's productivity or a Q App for writing customer emails and creating promotional content using a certain style of voice, tone, and branding. For more information on the capabilities, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/deploy-experience-iam-role.html#q-apps-actions">Amazon Q Apps capabilities</a> in the <i>Amazon Q Business User Guide</i>. </p> <p>For an overview of the Amazon Q App APIs, see <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_Operations_QApps.html">Overview of Amazon Q Apps API operations</a>.</p> <p>For information about the IAM access control permissions you need to use the Amazon Q Apps API, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/deploy-experience-iam-role.html"> IAM role for the Amazon Q Business web experience including Amazon Q Apps</a> in the <i>Amazon Q Business User Guide</i>.</p>
 *
 * @packageDocumentation
 */
export * from "./QAppsClient";
export * from "./QApps";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { QAppsExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export type * from "./models/models_0";

export { QAppsServiceException } from "./models/QAppsServiceException";
