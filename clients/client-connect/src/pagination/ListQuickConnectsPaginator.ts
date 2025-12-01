// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListQuickConnectsCommand,
  ListQuickConnectsCommandInput,
  ListQuickConnectsCommandOutput,
} from "../commands/ListQuickConnectsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListQuickConnects: (
  config: ConnectPaginationConfiguration,
  input: ListQuickConnectsCommandInput,
  ...rest: any[]
) => Paginator<ListQuickConnectsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListQuickConnectsCommandInput,
  ListQuickConnectsCommandOutput
>(ConnectClient, ListQuickConnectsCommand, "NextToken", "NextToken", "MaxResults");
