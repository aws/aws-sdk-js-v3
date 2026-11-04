// smithy-typescript generated code
/* eslint-disable */
/**
 * Amazon Simple Workflow Service
 *
 * The Amazon Simple Workflow Service (Amazon SWF) makes it easy to build applications that use Amazon's cloud to coordinate work across distributed components. In Amazon SWF, a *task* represents a logical unit of work that is performed by a component of your workflow. Coordinating tasks in a workflow involves managing intertask dependencies, scheduling, and concurrency in accordance with the logical flow of the application.
 *
 * Amazon SWF gives you full control over implementing tasks and coordinating them without worrying about underlying complexities such as tracking their progress and maintaining their state.
 *
 * This documentation serves as reference only. For a broader overview of the Amazon SWF programming model, see the *[Amazon SWF Developer Guide](https://docs.aws.amazon.com/amazonswf/latest/developerguide/)* .
 *
 * @packageDocumentation
 */
export * from "./SWFClient";
export * from "./SWF";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { SWFExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { SWFServiceException } from "./models/SWFServiceException";
