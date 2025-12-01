// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEksAnywhereSubscriptionsCommand,
  ListEksAnywhereSubscriptionsCommandInput,
  ListEksAnywhereSubscriptionsCommandOutput,
} from "../commands/ListEksAnywhereSubscriptionsCommand";
import { EKSClient } from "../EKSClient";
import { EKSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEksAnywhereSubscriptions: (
  config: EKSPaginationConfiguration,
  input: ListEksAnywhereSubscriptionsCommandInput,
  ...rest: any[]
) => Paginator<ListEksAnywhereSubscriptionsCommandOutput> = createPaginator<
  EKSPaginationConfiguration,
  ListEksAnywhereSubscriptionsCommandInput,
  ListEksAnywhereSubscriptionsCommandOutput
>(EKSClient, ListEksAnywhereSubscriptionsCommand, "nextToken", "nextToken", "maxResults");
