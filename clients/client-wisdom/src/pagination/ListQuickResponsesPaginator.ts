// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListQuickResponsesCommand,
  ListQuickResponsesCommandInput,
  ListQuickResponsesCommandOutput,
} from "../commands/ListQuickResponsesCommand";
import { WisdomClient } from "../WisdomClient";
import { WisdomPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListQuickResponses: (
  config: WisdomPaginationConfiguration,
  input: ListQuickResponsesCommandInput,
  ...rest: any[]
) => Paginator<ListQuickResponsesCommandOutput> = createPaginator<
  WisdomPaginationConfiguration,
  ListQuickResponsesCommandInput,
  ListQuickResponsesCommandOutput
>(WisdomClient, ListQuickResponsesCommand, "nextToken", "nextToken", "maxResults");
