// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { S3Client } from "../S3Client";

export interface S3PaginationConfiguration extends PaginationConfiguration {
  client: S3Client;
}
