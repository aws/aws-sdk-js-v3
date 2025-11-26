// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListMapRunsCommand, ListMapRunsCommandInput, ListMapRunsCommandOutput } from "../commands/ListMapRunsCommand";
import { SFNClient } from "../SFNClient";
import { SFNPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMapRuns: (
  config: SFNPaginationConfiguration,
  input: ListMapRunsCommandInput,
  ...rest: any[]
) => Paginator<ListMapRunsCommandOutput> = createPaginator<
  SFNPaginationConfiguration,
  ListMapRunsCommandInput,
  ListMapRunsCommandOutput
>(SFNClient, ListMapRunsCommand, "nextToken", "nextToken", "maxResults");
