// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>The CloudTrail Data Service lets you ingest events into CloudTrail from any source in your
 * hybrid environments, such as in-house or SaaS applications hosted on-premises or in the cloud,
 * virtual machines, or containers. You can store, access, analyze, troubleshoot and take action on
 * this data without maintaining multiple log aggregators and reporting tools. After you run
 * <code>PutAuditEvents</code> to ingest your application activity into CloudTrail, you can use CloudTrail Lake to search, query, and analyze the data that is logged
 * from your applications.</p>
 *
 * @packageDocumentation
 */
export * from "./CloudTrailDataClient";
export * from "./CloudTrailData";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export * from "./commands";
export * from "./models";

export { CloudTrailDataServiceException } from "./models/CloudTrailDataServiceException";
