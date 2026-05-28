// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSystemEventsCommand,
  ListSystemEventsCommandInput,
  ListSystemEventsCommandOutput,
} from "../commands/ListSystemEventsCommand";
import { Resiliencehubv2Client } from "../Resiliencehubv2Client";
import type { Resiliencehubv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSystemEvents: (
  config: Resiliencehubv2PaginationConfiguration,
  input: ListSystemEventsCommandInput,
  ...rest: any[]
) => Paginator<ListSystemEventsCommandOutput> = createPaginator<
  Resiliencehubv2PaginationConfiguration,
  ListSystemEventsCommandInput,
  ListSystemEventsCommandOutput
>(Resiliencehubv2Client, ListSystemEventsCommand, "nextToken", "nextToken", "maxResults");
