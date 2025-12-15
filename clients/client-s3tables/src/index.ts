// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>An Amazon S3 table represents a structured dataset consisting of tabular data in <a href="https://parquet.apache.org/docs/">Apache Parquet</a> format and related metadata. This data is stored inside an S3 table as a subresource. All tables in a table bucket are stored in the <a href="https://iceberg.apache.org/docs/latest/">Apache Iceberg</a> table format. Through integration with the <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/glue/latest/dg/catalog-and-crawler.html">Amazon Web Services Glue Data Catalog</a> you can interact with your tables using Amazon Web Services analytics services, such as <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/athena/">Amazon Athena</a> and <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/redshift/">Amazon Redshift</a>. Amazon S3 manages maintenance of your tables through automatic file compaction and snapshot management. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-buckets.html">Amazon S3 table buckets</a>.</p>
 *
 * @packageDocumentation
 */
export * from "./S3TablesClient";
export * from "./S3Tables";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { S3TablesExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export type * from "./models/models_0";

export { S3TablesServiceException } from "./models/S3TablesServiceException";
