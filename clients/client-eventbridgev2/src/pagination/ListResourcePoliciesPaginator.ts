// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResourcePoliciesCommand,
  ListResourcePoliciesCommandInput,
  ListResourcePoliciesCommandOutput,
} from "../commands/ListResourcePoliciesCommand";
import { EventBridgeV2Client } from "../EventBridgeV2Client";
import type { EventBridgeV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourcePolicies: (
  config: EventBridgeV2PaginationConfiguration,
  input: ListResourcePoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListResourcePoliciesCommandOutput> = createPaginator<
  EventBridgeV2PaginationConfiguration,
  ListResourcePoliciesCommandInput,
  ListResourcePoliciesCommandOutput
>(EventBridgeV2Client, ListResourcePoliciesCommand, "NextToken", "NextToken", "MaxResults");
