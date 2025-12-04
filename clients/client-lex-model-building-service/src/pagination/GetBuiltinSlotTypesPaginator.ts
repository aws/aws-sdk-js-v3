// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetBuiltinSlotTypesCommand,
  GetBuiltinSlotTypesCommandInput,
  GetBuiltinSlotTypesCommandOutput,
} from "../commands/GetBuiltinSlotTypesCommand";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetBuiltinSlotTypes: (
  config: LexModelBuildingServicePaginationConfiguration,
  input: GetBuiltinSlotTypesCommandInput,
  ...rest: any[]
) => Paginator<GetBuiltinSlotTypesCommandOutput> = createPaginator<
  LexModelBuildingServicePaginationConfiguration,
  GetBuiltinSlotTypesCommandInput,
  GetBuiltinSlotTypesCommandOutput
>(LexModelBuildingServiceClient, GetBuiltinSlotTypesCommand, "nextToken", "nextToken", "maxResults");
