import { LookoutVision } from "../LookoutVision";
import { LookoutVisionClient } from "../LookoutVisionClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface LookoutVisionPaginationConfiguration extends PaginationConfiguration {
  client: LookoutVision | LookoutVisionClient;
}
