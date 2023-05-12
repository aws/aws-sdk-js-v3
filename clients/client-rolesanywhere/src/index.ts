// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>AWS Identity and Access Management Roles Anywhere provides a secure way for your workloads such as servers, containers, and applications running outside of AWS to obtain Temporary AWS credentials. Your workloads can use the same IAM policies and roles that you have configured with native AWS applications to access AWS resources. Using IAM Roles Anywhere will eliminate the need to manage long term credentials for workloads running outside of AWS.</p>
 *          <p>To use IAM Roles Anywhere customer workloads will need to use X.509 certificates issued by their Certificate Authority (CA) . The Certificate Authority (CA) needs to be registered with IAM Roles Anywhere as a trust anchor to establish trust between customer PKI and IAM Roles Anywhere. Customers who do not manage their own PKI system can use AWS Certificate Manager Private Certificate Authority (ACM PCA) to create a Certificate Authority and use that to establish trust with IAM Roles Anywhere</p>
 *          <p>This guide describes the IAM rolesanywhere operations that you can call programmatically. For general information about IAM Roles Anywhere see <a href="https://docs.aws.amazon.com/">https://docs.aws.amazon.com/</a>
 *          </p>
 *
 * @packageDocumentation
 */
export * from "./RolesAnywhereClient";
export * from "./RolesAnywhere";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { RolesAnywhereServiceException } from "./models/RolesAnywhereServiceException";
