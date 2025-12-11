// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListIngestionsCommand,
  ListIngestionsCommandInput,
  ListIngestionsCommandOutput,
} from "../commands/ListIngestionsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIngestions: (
  config: QuickSightPaginationConfiguration,
  input: ListIngestionsCommandInput,
  ...rest: any[]
) => Paginator<ListIngestionsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListIngestionsCommandInput,
  ListIngestionsCommandOutput
>(QuickSightClient, ListIngestionsCommand, "NextToken", "NextToken", "MaxResults");
