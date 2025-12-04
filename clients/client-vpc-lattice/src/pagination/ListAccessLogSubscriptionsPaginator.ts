// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccessLogSubscriptionsCommand,
  ListAccessLogSubscriptionsCommandInput,
  ListAccessLogSubscriptionsCommandOutput,
} from "../commands/ListAccessLogSubscriptionsCommand";
import { VPCLatticeClient } from "../VPCLatticeClient";
import { VPCLatticePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccessLogSubscriptions: (
  config: VPCLatticePaginationConfiguration,
  input: ListAccessLogSubscriptionsCommandInput,
  ...rest: any[]
) => Paginator<ListAccessLogSubscriptionsCommandOutput> = createPaginator<
  VPCLatticePaginationConfiguration,
  ListAccessLogSubscriptionsCommandInput,
  ListAccessLogSubscriptionsCommandOutput
>(VPCLatticeClient, ListAccessLogSubscriptionsCommand, "nextToken", "nextToken", "maxResults");
