// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { S3 } from "../S3";
import { S3Client } from "../S3Client";

export interface S3PaginationConfiguration extends PaginationConfiguration {
  client: S3 | S3Client;
}
