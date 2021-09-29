import { S3Outposts } from "../S3Outposts";
import { S3OutpostsClient } from "../S3OutpostsClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface S3OutpostsPaginationConfiguration extends PaginationConfiguration {
  client: S3Outposts | S3OutpostsClient;
}
