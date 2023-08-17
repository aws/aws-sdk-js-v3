// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>CloudFormation</fullname>
 *          <p>CloudFormation allows you to create and manage Amazon Web Services infrastructure deployments predictably
 *    and repeatedly. You can use CloudFormation to leverage Amazon Web Services products, such as Amazon Elastic Compute Cloud, Amazon Elastic Block Store, Amazon Simple Notification Service, Elastic Load Balancing, and Auto Scaling to build
 *    highly reliable, highly scalable, cost-effective applications without creating or configuring the underlying Amazon Web Services infrastructure.</p>
 *          <p>With CloudFormation, you declare all your resources and dependencies in a template file. The template
 *    defines a collection of resources as a single unit called a stack. CloudFormation creates and deletes all member
 *    resources of the stack together and manages all dependencies between the resources for you.</p>
 *          <p>For more information about CloudFormation, see the <a href="http://aws.amazon.com/cloudformation/">CloudFormation product page</a>.</p>
 *          <p>CloudFormation makes use of other Amazon Web Services products. If you need additional technical information
 *    about a specific Amazon Web Services product, you can find the product's technical documentation at <a href="https://docs.aws.amazon.com/">docs.aws.amazon.com</a>.</p>
 *
 * @packageDocumentation
 */
export * from "./CloudFormationClient";
export * from "./CloudFormation";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export * from "./commands";
export * from "./pagination";
export * from "./waiters";
export * from "./models";

export { CloudFormationServiceException } from "./models/CloudFormationServiceException";
