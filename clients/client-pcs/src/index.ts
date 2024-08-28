// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Amazon Web Services Parallel Computing Service (Amazon Web Services PCS) is a managed service that makes it easier for
 *          you to run and scale your high performance computing (HPC) workloads,
 *          and build scientific and engineering models on Amazon Web Services using Slurm.
 *          For more information, see
 *          the <a href="https://docs.aws.amazon.com/pcs/latest/userguide">Amazon Web Services Parallel Computing Service
 *             User Guide</a>.</p>
 *          <p>This reference describes the actions and data types of the service management API. You can use the
 *          Amazon Web Services SDKs to call the API actions in software, or use the Command Line Interface (CLI) to call the API
 *          actions manually. These API actions manage the service through an Amazon Web Services account.</p>
 *          <p>The API actions operate on Amazon Web Services PCS resources. A <i>resource</i> is
 *          an entity in Amazon Web Services that you can work with. Amazon Web Services services create resources when you use
 *          the features of the service. Examples of Amazon Web Services PCS resources include clusters, compute
 *          node groups, and queues. For more information about resources in Amazon Web Services, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/getting-started-terms-and-concepts.html#term-resource">Resource</a> in the <i>Resource Explorer User Guide</i>. </p>
 *          <p>An Amazon Web Services PCS <i>compute node</i> is an Amazon EC2 instance. You don't launch
 *          compute nodes directly. Amazon Web Services PCS uses configuration information that you provide to launch
 *          compute nodes in your Amazon Web Services account. You receive billing charges for your running compute nodes.
 *          Amazon Web Services PCS automatically terminates your compute nodes when you delete the Amazon Web Services PCS resources
 *          related to those compute nodes.</p>
 *
 * @packageDocumentation
 */
export * from "./PCSClient";
export * from "./PCS";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { PCSExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { PCSServiceException } from "./models/PCSServiceException";
