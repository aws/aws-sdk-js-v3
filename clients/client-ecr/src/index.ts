// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>Amazon Elastic Container Registry</fullname>
 *         <p>Amazon Elastic Container Registry (Amazon ECR) is a managed container image registry service. Customers can use the
 *             familiar Docker CLI, or their preferred client, to push, pull, and manage images. Amazon ECR
 *             provides a secure, scalable, and reliable registry for your Docker or Open Container
 *             Initiative (OCI) images. Amazon ECR supports private repositories with resource-based
 *             permissions using IAM so that specific users or Amazon EC2 instances can access
 *             repositories and images.</p>
 *         <p>Amazon ECR has service endpoints in each supported Region. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/ecr.html">Amazon ECR endpoints</a> in the
 *                 <i>Amazon Web Services General Reference</i>.</p>
 *
 * @packageDocumentation
 */
export * from "./ECRClient";
export * from "./ECR";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export * from "./commands";
export * from "./pagination";
export * from "./waiters";
export * from "./models";

export { ECRServiceException } from "./models/ECRServiceException";
