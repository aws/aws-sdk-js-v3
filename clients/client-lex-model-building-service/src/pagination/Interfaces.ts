import { LexModelBuildingService } from "../LexModelBuildingService";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface LexModelBuildingServicePaginationConfiguration extends PaginationConfiguration {
  client: LexModelBuildingService | LexModelBuildingServiceClient;
}
