// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Use Amazon CloudWatch Observability Access Manager to create and manage links between source accounts and
 *             monitoring accounts by using <i>CloudWatch cross-account observability</i>. With
 *             CloudWatch cross-account observability, you can monitor and troubleshoot applications that span
 *             multiple accounts within a Region. Seamlessly search, visualize, and analyze your metrics,
 *             logs, and traces in any of the linked accounts without account boundaries.</p>
 *
 *         <p>Set up one or more Amazon Web Services accounts as <i>monitoring
 *             accounts</i> and link them with multiple <i>source accounts</i>. A
 *             monitoring account is a central Amazon Web Services account that can view and interact with
 *             observability data generated from source accounts. A source account is an individual Amazon Web Services account that generates observability data for the resources that reside in it.
 *             Source accounts share their observability data with the monitoring account. The shared
 *             observability data can include metrics in Amazon CloudWatch, logs in Amazon CloudWatch Logs, and traces in X-Ray.</p>
 *
 * @packageDocumentation
 */
export * from "./OAMClient";
export * from "./OAM";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { OAMServiceException } from "./models/OAMServiceException";
