// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKIdentityClient } from "../ChimeSDKIdentityClient";
import {
  ListAppInstanceBotsCommand,
  ListAppInstanceBotsCommandInput,
  ListAppInstanceBotsCommandOutput,
} from "../commands/ListAppInstanceBotsCommand";
import { ChimeSDKIdentityPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAppInstanceBots: (
  config: ChimeSDKIdentityPaginationConfiguration,
  input: ListAppInstanceBotsCommandInput,
  ...rest: any[]
) => Paginator<ListAppInstanceBotsCommandOutput> = createPaginator<
  ChimeSDKIdentityPaginationConfiguration,
  ListAppInstanceBotsCommandInput,
  ListAppInstanceBotsCommandOutput
>(ChimeSDKIdentityClient, ListAppInstanceBotsCommand, "NextToken", "NextToken", "MaxResults");
