// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListRunsCommand, ListRunsCommandInput, ListRunsCommandOutput } from "../commands/ListRunsCommand";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRuns: (
  config: OmicsPaginationConfiguration,
  input: ListRunsCommandInput,
  ...rest: any[]
) => Paginator<ListRunsCommandOutput> = createPaginator<
  OmicsPaginationConfiguration,
  ListRunsCommandInput,
  ListRunsCommandOutput
>(OmicsClient, ListRunsCommand, "startingToken", "nextToken", "maxResults");
