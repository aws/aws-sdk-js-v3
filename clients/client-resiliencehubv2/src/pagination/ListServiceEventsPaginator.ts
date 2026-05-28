// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListServiceEventsCommand,
  ListServiceEventsCommandInput,
  ListServiceEventsCommandOutput,
} from "../commands/ListServiceEventsCommand";
import { Resiliencehubv2Client } from "../Resiliencehubv2Client";
import type { Resiliencehubv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServiceEvents: (
  config: Resiliencehubv2PaginationConfiguration,
  input: ListServiceEventsCommandInput,
  ...rest: any[]
) => Paginator<ListServiceEventsCommandOutput> = createPaginator<
  Resiliencehubv2PaginationConfiguration,
  ListServiceEventsCommandInput,
  ListServiceEventsCommandOutput
>(Resiliencehubv2Client, ListServiceEventsCommand, "nextToken", "nextToken", "maxResults");
