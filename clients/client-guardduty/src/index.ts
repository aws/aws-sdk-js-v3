// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Amazon GuardDuty is a continuous security monitoring service that analyzes and processes
 *       the following foundational data sources - VPC flow logs, Amazon Web Services CloudTrail management event logs, CloudTrail S3 data event
 *       logs, EKS audit logs, DNS logs, Amazon EBS volume data, runtime activity belonging to container workloads, such
 *       as Amazon EKS, Amazon ECS (including Amazon Web Services Fargate), and Amazon EC2 instances.
 *       It uses threat intelligence
 *       feeds, such as lists of malicious IPs and domains, and machine learning to identify
 *       unexpected, potentially unauthorized, and malicious activity within your Amazon Web Services environment.
 *       This can include issues like escalations of privileges, uses of exposed credentials, or
 *       communication with malicious IPs, domains, or presence of malware on your Amazon EC2 instances
 *       and container workloads. For example, GuardDuty can detect compromised EC2 instances and
 *       container workloads serving malware, or mining bitcoin. </p>
 *          <p>GuardDuty also monitors Amazon Web Services account access behavior for signs of compromise, such as
 *       unauthorized infrastructure deployments like EC2 instances deployed in a Region that has never
 *       been used, or unusual API calls like a password policy change to reduce password strength. </p>
 *          <p>GuardDuty informs you about the status of your Amazon Web Services environment by producing security
 *       findings that you can view in the GuardDuty console or through Amazon EventBridge. For more
 *       information, see the <i>
 *                <a href="https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html">Amazon
 *           GuardDuty User Guide</a>
 *             </i>. </p>
 *
 * @packageDocumentation
 */
export * from "./GuardDutyClient";
export * from "./GuardDuty";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { GuardDutyExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export type * from "./models/models_0";
export type * from "./models/models_1";

export { GuardDutyServiceException } from "./models/GuardDutyServiceException";
