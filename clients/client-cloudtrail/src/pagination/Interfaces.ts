// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { CloudTrail } from "../CloudTrail";
import { CloudTrailClient } from "../CloudTrailClient";

export interface CloudTrailPaginationConfiguration extends PaginationConfiguration {
  client: CloudTrail | CloudTrailClient;
}
