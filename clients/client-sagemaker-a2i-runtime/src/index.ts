// smithy-typescript generated code
/* eslint-disable */
/**
 * Amazon Augmented AI (Amazon A2I) adds the benefit of human judgment to any machine learning application. When an AI application can't evaluate data with a high degree of confidence, human reviewers can take over. This human review is called a human review workflow. To create and start a human review workflow, you need three resources: a *worker task template*, a *flow definition*, and a *human loop*.
 *
 * For information about these resources and prerequisites for using Amazon A2I, see [Get Started with Amazon Augmented AI](https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-getting-started.html) in the Amazon SageMaker Developer Guide.
 *
 * This API reference includes information about API actions and data types that you can use to interact with Amazon A2I programmatically. Use this guide to:
 *
 * - Start a human loop with the `StartHumanLoop` operation when using Amazon A2I with a *custom task type*. To learn more about the difference between custom and built-in task types, see [Use Task Types](https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-task-types-general.html). To learn how to start a human loop using this API, see [Create and Start a Human Loop for a Custom Task Type](https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-start-human-loop.html#a2i-instructions-starthumanloop) in the Amazon SageMaker Developer Guide.
 * - Manage your human loops. You can list all human loops that you have created, describe individual human loops, and stop and delete human loops. To learn more, see [Monitor and Manage Your Human Loop](https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-monitor-humanloop-results.html) in the Amazon SageMaker Developer Guide.
 *
 * Amazon A2I integrates APIs from various AWS services to create and start human review workflows for those services. To learn how Amazon A2I uses these APIs, see [Use APIs in Amazon A2I](https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-api-references.html) in the Amazon SageMaker Developer Guide.
 *
 * @packageDocumentation
 */
export * from "./SageMakerA2IRuntimeClient";
export * from "./SageMakerA2IRuntime";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { SageMakerA2IRuntimeExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { SageMakerA2IRuntimeServiceException } from "./models/SageMakerA2IRuntimeServiceException";
