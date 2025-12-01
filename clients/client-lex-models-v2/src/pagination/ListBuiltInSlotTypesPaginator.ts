// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBuiltInSlotTypesCommand,
  ListBuiltInSlotTypesCommandInput,
  ListBuiltInSlotTypesCommandOutput,
} from "../commands/ListBuiltInSlotTypesCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBuiltInSlotTypes: (
  config: LexModelsV2PaginationConfiguration,
  input: ListBuiltInSlotTypesCommandInput,
  ...rest: any[]
) => Paginator<ListBuiltInSlotTypesCommandOutput> = createPaginator<
  LexModelsV2PaginationConfiguration,
  ListBuiltInSlotTypesCommandInput,
  ListBuiltInSlotTypesCommandOutput
>(LexModelsV2Client, ListBuiltInSlotTypesCommand, "nextToken", "nextToken", "maxResults");
