// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTestRunEventsCommand,
  ListTestRunEventsCommandInput,
  ListTestRunEventsCommandOutput,
} from "../commands/ListTestRunEventsCommand";
import { Resiliencehubv2Client } from "../Resiliencehubv2Client";
import type { Resiliencehubv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTestRunEvents: (
  config: Resiliencehubv2PaginationConfiguration,
  input: ListTestRunEventsCommandInput,
  ...rest: any[]
) => Paginator<ListTestRunEventsCommandOutput> = createPaginator<
  Resiliencehubv2PaginationConfiguration,
  ListTestRunEventsCommandInput,
  ListTestRunEventsCommandOutput
>(Resiliencehubv2Client, ListTestRunEventsCommand, "nextToken", "nextToken", "maxResults");
