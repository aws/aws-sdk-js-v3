import { CloudFront } from "../CloudFront";
import { CloudFrontClient } from "../CloudFrontClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface CloudFrontPaginationConfiguration extends PaginationConfiguration {
  client: CloudFront | CloudFrontClient;
}
