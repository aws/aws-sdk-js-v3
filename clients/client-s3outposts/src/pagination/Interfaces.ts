// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { S3Outposts } from "../S3Outposts";
import { S3OutpostsClient } from "../S3OutpostsClient";

export interface S3OutpostsPaginationConfiguration extends PaginationConfiguration {
  client: S3Outposts | S3OutpostsClient;
}
