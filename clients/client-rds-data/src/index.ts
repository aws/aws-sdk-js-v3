// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>Amazon RDS Data Service</fullname>
 *         <p>Amazon RDS provides an HTTP endpoint to run SQL statements on an Amazon Aurora Serverless v1 DB cluster. To run these
 *             statements, you work with the Data Service API.</p>
 *         <note>
 *             <p>The Data Service API isn't supported on Amazon Aurora Serverless v2 DB clusters.</p>
 *         </note>
 *         <p>For more information about the Data Service API, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API</a>
 *           in the <i>Amazon Aurora User Guide</i>.</p>
 *
 * @packageDocumentation
 */
export * from "./RDSDataClient";
export * from "./RDSData";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export * from "./commands";
export * from "./models";

export { RDSDataServiceException } from "./models/RDSDataServiceException";
