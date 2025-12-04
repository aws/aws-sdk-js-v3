// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCheckSummariesCommand,
  ListCheckSummariesCommandInput,
  ListCheckSummariesCommandOutput,
} from "../commands/ListCheckSummariesCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCheckSummaries: (
  config: WellArchitectedPaginationConfiguration,
  input: ListCheckSummariesCommandInput,
  ...rest: any[]
) => Paginator<ListCheckSummariesCommandOutput> = createPaginator<
  WellArchitectedPaginationConfiguration,
  ListCheckSummariesCommandInput,
  ListCheckSummariesCommandOutput
>(WellArchitectedClient, ListCheckSummariesCommand, "NextToken", "NextToken", "MaxResults");
