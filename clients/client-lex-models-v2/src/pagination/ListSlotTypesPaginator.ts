// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSlotTypesCommand,
  ListSlotTypesCommandInput,
  ListSlotTypesCommandOutput,
} from "../commands/ListSlotTypesCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSlotTypes: (
  config: LexModelsV2PaginationConfiguration,
  input: ListSlotTypesCommandInput,
  ...rest: any[]
) => Paginator<ListSlotTypesCommandOutput> = createPaginator<
  LexModelsV2PaginationConfiguration,
  ListSlotTypesCommandInput,
  ListSlotTypesCommandOutput
>(LexModelsV2Client, ListSlotTypesCommand, "nextToken", "nextToken", "maxResults");
