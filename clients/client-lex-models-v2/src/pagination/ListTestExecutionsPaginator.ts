// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTestExecutionsCommand,
  ListTestExecutionsCommandInput,
  ListTestExecutionsCommandOutput,
} from "../commands/ListTestExecutionsCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTestExecutions: (
  config: LexModelsV2PaginationConfiguration,
  input: ListTestExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListTestExecutionsCommandOutput> = createPaginator<
  LexModelsV2PaginationConfiguration,
  ListTestExecutionsCommandInput,
  ListTestExecutionsCommandOutput
>(LexModelsV2Client, ListTestExecutionsCommand, "nextToken", "nextToken", "maxResults");
