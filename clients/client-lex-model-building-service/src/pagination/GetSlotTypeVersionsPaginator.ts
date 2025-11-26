// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetSlotTypeVersionsCommand,
  GetSlotTypeVersionsCommandInput,
  GetSlotTypeVersionsCommandOutput,
} from "../commands/GetSlotTypeVersionsCommand";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetSlotTypeVersions: (
  config: LexModelBuildingServicePaginationConfiguration,
  input: GetSlotTypeVersionsCommandInput,
  ...rest: any[]
) => Paginator<GetSlotTypeVersionsCommandOutput> = createPaginator<
  LexModelBuildingServicePaginationConfiguration,
  GetSlotTypeVersionsCommandInput,
  GetSlotTypeVersionsCommandOutput
>(LexModelBuildingServiceClient, GetSlotTypeVersionsCommand, "nextToken", "nextToken", "maxResults");
