// smithy-typescript generated code
/* eslint-disable */
/**
 * An Amazon S3 table represents a structured dataset consisting of tabular data in [Apache Parquet](https://parquet.apache.org/docs/) format and related metadata. This data is stored inside an S3 table as a subresource. All tables in a table bucket are stored in the [Apache Iceberg](https://iceberg.apache.org/docs/latest/) table format. Through integration with the [Amazon Web Services Glue Data Catalog](https://docs.aws.amazon.com/https:/docs.aws.amazon.com/glue/latest/dg/catalog-and-crawler.html) you can interact with your tables using Amazon Web Services analytics services, such as [Amazon Athena](https://docs.aws.amazon.com/https:/docs.aws.amazon.com/athena/) and [Amazon Redshift](https://docs.aws.amazon.com/https:/docs.aws.amazon.com/redshift/). Amazon S3 manages maintenance of your tables through automatic file compaction and snapshot management. For more information, see [Amazon S3 table buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-buckets.html).
 *
 * @packageDocumentation
 */
export * from "./S3TablesClient";
export * from "./S3Tables";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { S3TablesExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { S3TablesServiceException } from "./models/S3TablesServiceException";
