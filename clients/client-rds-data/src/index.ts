// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>RDS Data API</fullname>
 *          <p>Amazon RDS provides an HTTP endpoint to run SQL statements on an Amazon Aurora DB cluster. To run these
 *             statements, you use the RDS Data API (Data API).</p>
 *          <p>Data API is available with the following types of Aurora databases:</p>
 *          <ul>
 *             <li>
 *                <p>Aurora PostgreSQL - Serverless v2, Serverless v1, and provisioned</p>
 *             </li>
 *             <li>
 *                <p>Aurora MySQL - Serverless v1 only</p>
 *             </li>
 *          </ul>
 *          <p>For more information about the Data API, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using RDS Data API</a>
 *           in the <i>Amazon Aurora User Guide</i>.</p>
 *
 * @packageDocumentation
 */
export * from "./RDSDataClient";
export * from "./RDSData";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { RDSDataExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./models";

export { RDSDataServiceException } from "./models/RDSDataServiceException";
