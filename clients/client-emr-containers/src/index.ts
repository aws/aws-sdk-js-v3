// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Amazon EMR on EKS provides a deployment option for Amazon EMR that allows
 *          you to run open-source big data frameworks on Amazon Elastic Kubernetes Service (Amazon EKS).
 *          With this deployment option, you can focus on running analytics workloads while Amazon EMR on EKS builds, configures, and manages containers for open-source applications.
 *          For more information about Amazon EMR on EKS concepts and tasks, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/emr-eks.html">What is
 *             shared id="EMR-EKS"/></a>.</p>
 *          <p>
 *             <i>Amazon EMR containers</i> is the API name for Amazon EMR on EKS. The <code>emr-containers</code> prefix is used in the following
 *          scenarios: </p>
 *          <ul>
 *             <li>
 *                <p>It is the prefix in the CLI commands for Amazon EMR on EKS. For example,
 *                   <code>aws emr-containers start-job-run</code>.</p>
 *             </li>
 *             <li>
 *                <p>It is the prefix before IAM policy actions for Amazon EMR on EKS. For
 *                example, <code>"Action": [ "emr-containers:StartJobRun"]</code>. For more
 *                information, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-actions">Policy actions for Amazon EMR on EKS</a>.</p>
 *             </li>
 *             <li>
 *                <p>It is the prefix used in Amazon EMR on EKS service endpoints. For example,
 *                   <code>emr-containers.us-east-2.amazonaws.com</code>. For more information, see
 *                   <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/service-quotas.html#service-endpoints">Amazon EMR on EKSService Endpoints</a>.</p>
 *             </li>
 *          </ul>
 *
 * @packageDocumentation
 */
export * from "./EMRContainersClient";
export * from "./EMRContainers";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { EMRContainersServiceException } from "./models/EMRContainersServiceException";
