// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListUserJourneysCommand,
  ListUserJourneysCommandInput,
  ListUserJourneysCommandOutput,
} from "../commands/ListUserJourneysCommand";
import { Resiliencehubv2Client } from "../Resiliencehubv2Client";
import type { Resiliencehubv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUserJourneys: (
  config: Resiliencehubv2PaginationConfiguration,
  input: ListUserJourneysCommandInput,
  ...rest: any[]
) => Paginator<ListUserJourneysCommandOutput> = createPaginator<
  Resiliencehubv2PaginationConfiguration,
  ListUserJourneysCommandInput,
  ListUserJourneysCommandOutput
>(Resiliencehubv2Client, ListUserJourneysCommand, "nextToken", "nextToken", "maxResults");
