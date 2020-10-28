import { S3 } from "../S3";
import { S3Client } from "../S3Client";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface S3PaginationConfiguration extends PaginationConfiguration {
  client: S3 | S3Client;
}
