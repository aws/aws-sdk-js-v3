// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetSlotTypesCommand,
  GetSlotTypesCommandInput,
  GetSlotTypesCommandOutput,
} from "../commands/GetSlotTypesCommand";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetSlotTypes: (
  config: LexModelBuildingServicePaginationConfiguration,
  input: GetSlotTypesCommandInput,
  ...rest: any[]
) => Paginator<GetSlotTypesCommandOutput> = createPaginator<
  LexModelBuildingServicePaginationConfiguration,
  GetSlotTypesCommandInput,
  GetSlotTypesCommandOutput
>(LexModelBuildingServiceClient, GetSlotTypesCommand, "nextToken", "nextToken", "maxResults");
