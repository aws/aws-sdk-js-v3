// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudTrailClient } from "../CloudTrailClient";
import { ListTrailsCommand, ListTrailsCommandInput, ListTrailsCommandOutput } from "../commands/ListTrailsCommand";
import { CloudTrailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTrails: (
  config: CloudTrailPaginationConfiguration,
  input: ListTrailsCommandInput,
  ...rest: any[]
) => Paginator<ListTrailsCommandOutput> = createPaginator<
  CloudTrailPaginationConfiguration,
  ListTrailsCommandInput,
  ListTrailsCommandOutput
>(CloudTrailClient, ListTrailsCommand, "NextToken", "NextToken", "");
