// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { LexModelBuildingService } from "../LexModelBuildingService";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient";

export interface LexModelBuildingServicePaginationConfiguration extends PaginationConfiguration {
  client: LexModelBuildingService | LexModelBuildingServiceClient;
}
