// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTestRunSourceEventsCommand,
  ListTestRunSourceEventsCommandInput,
  ListTestRunSourceEventsCommandOutput,
} from "../commands/ListTestRunSourceEventsCommand";
import { Resiliencehubv2Client } from "../Resiliencehubv2Client";
import type { Resiliencehubv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTestRunSourceEvents: (
  config: Resiliencehubv2PaginationConfiguration,
  input: ListTestRunSourceEventsCommandInput,
  ...rest: any[]
) => Paginator<ListTestRunSourceEventsCommandOutput> = createPaginator<
  Resiliencehubv2PaginationConfiguration,
  ListTestRunSourceEventsCommandInput,
  ListTestRunSourceEventsCommandOutput
>(Resiliencehubv2Client, ListTestRunSourceEventsCommand, "nextToken", "nextToken", "maxResults");
