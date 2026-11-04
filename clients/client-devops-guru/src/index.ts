// smithy-typescript generated code
/* eslint-disable */
/**
 * Amazon DevOps Guru is a fully managed service that helps you identify anomalous behavior in business critical operational applications. You specify the Amazon Web Services resources that you want DevOps Guru to cover, then the Amazon CloudWatch metrics and Amazon Web Services CloudTrail events related to those resources are analyzed. When anomalous behavior is detected, DevOps Guru creates an *insight* that includes recommendations, related events, and related metrics that can help you improve your operational applications. For more information, see [What is Amazon DevOps Guru](https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html).
 *
 * You can specify 1 or 2 Amazon Simple Notification Service topics so you are notified every time a new insight is created. You can also enable DevOps Guru to generate an OpsItem in Amazon Web Services Systems Manager for each insight to help you manage and track your work addressing insights.
 *
 * To learn about the DevOps Guru workflow, see [How DevOps Guru works](https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html#how-it-works). To learn about DevOps Guru concepts, see [Concepts in DevOps Guru](https://docs.aws.amazon.com/devops-guru/latest/userguide/concepts.html).
 *
 * @packageDocumentation
 */
export * from "./DevOpsGuruClient";
export * from "./DevOpsGuru";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { DevOpsGuruExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { DevOpsGuruServiceException } from "./models/DevOpsGuruServiceException";
