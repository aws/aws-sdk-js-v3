// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { LookoutVision } from "../LookoutVision";
import { LookoutVisionClient } from "../LookoutVisionClient";

export interface LookoutVisionPaginationConfiguration extends PaginationConfiguration {
  client: LookoutVision | LookoutVisionClient;
}
