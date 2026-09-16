// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPolicyEventsCommand,
  ListPolicyEventsCommandInput,
  ListPolicyEventsCommandOutput,
} from "../commands/ListPolicyEventsCommand";
import { Resiliencehubv2Client } from "../Resiliencehubv2Client";
import type { Resiliencehubv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPolicyEvents: (
  config: Resiliencehubv2PaginationConfiguration,
  input: ListPolicyEventsCommandInput,
  ...rest: any[]
) => Paginator<ListPolicyEventsCommandOutput> = createPaginator<
  Resiliencehubv2PaginationConfiguration,
  ListPolicyEventsCommandInput,
  ListPolicyEventsCommandOutput
>(Resiliencehubv2Client, ListPolicyEventsCommand, "nextToken", "nextToken", "maxResults");
