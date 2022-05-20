// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { CloudFront } from "../CloudFront";
import { CloudFrontClient } from "../CloudFrontClient";

export interface CloudFrontPaginationConfiguration extends PaginationConfiguration {
  client: CloudFront | CloudFrontClient;
}
