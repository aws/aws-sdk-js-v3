// smithy-typescript generated code
/* eslint-disable */
/**
 * This is the *Amazon Q Business* API Reference. Amazon Q Business is a fully managed, generative-AI powered enterprise chat assistant that you can deploy within your organization. Amazon Q Business enhances employee productivity by supporting key tasks such as question-answering, knowledge discovery, writing email messages, summarizing text, drafting document outlines, and brainstorming ideas. Users ask questions of Amazon Q Business and get answers that are presented in a conversational manner. For an introduction to the service, see the [*Amazon Q Business User Guide*](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/what-is.html).
 *
 * For an overview of the Amazon Q Business APIs, see [Overview of Amazon Q Business API operations](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/api-ref.html#api-overview).
 *
 * For information about the IAM access control permissions you need to use this API, see [IAM roles for Amazon Q Business](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/iam-roles.html) in the *Amazon Q Business User Guide*.
 *
 * The following resources provide additional information about using the Amazon Q Business API:
 *
 * - *[Setting up for Amazon Q Business](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/setting-up.html)*
 * - *[Amazon Q Business CLI Reference](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/qbusiness/index.html)*
 * - *[Amazon Web Services General Reference](https://docs.aws.amazon.com/general/latest/gr/amazonq.html)*
 *
 * @packageDocumentation
 */
export * from "./QBusinessClient";
export * from "./QBusiness";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { QBusinessExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";
export * from "./models/models_1";

export { QBusinessServiceException } from "./models/QBusinessServiceException";
