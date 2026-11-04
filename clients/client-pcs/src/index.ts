// smithy-typescript generated code
/* eslint-disable */
/**
 * Parallel Computing Service (PCS) is a managed service that makes it easier for you to run and scale your high performance computing (HPC) workloads, and build scientific and engineering models on Amazon Web Services using Slurm. For more information, see the [Parallel Computing Service User Guide](https://docs.aws.amazon.com/pcs/latest/userguide).
 *
 * This reference describes the actions and data types of the service management API. You can use the Amazon Web Services SDKs to call the API actions in software, or use the Command Line Interface (CLI) to call the API actions manually. These API actions manage the service through an Amazon Web Services account.
 *
 * The API actions operate on PCS resources. A *resource* is an entity in Amazon Web Services that you can work with. Amazon Web Services services create resources when you use the features of the service. Examples of PCS resources include clusters, compute node groups, and queues. For more information about resources in Amazon Web Services, see [Resource](https://docs.aws.amazon.com/resource-explorer/latest/userguide/getting-started-terms-and-concepts.html#term-resource) in the *Resource Explorer User Guide*.
 *
 * An PCS *compute node* is an Amazon EC2 instance. You don't launch compute nodes directly. PCS uses configuration information that you provide to launch compute nodes in your Amazon Web Services account. You receive billing charges for your running compute nodes. PCS automatically terminates your compute nodes when you delete the PCS resources related to those compute nodes.
 *
 * @packageDocumentation
 */
export * from "./PCSClient";
export * from "./PCS";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { PCSExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { PCSServiceException } from "./models/PCSServiceException";
