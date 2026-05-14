// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLinkRoutingRulesCommand,
  ListLinkRoutingRulesCommandInput,
  ListLinkRoutingRulesCommandOutput,
} from "../commands/ListLinkRoutingRulesCommand";
import { RTBFabricClient } from "../RTBFabricClient";
import type { RTBFabricPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLinkRoutingRules: (
  config: RTBFabricPaginationConfiguration,
  input: ListLinkRoutingRulesCommandInput,
  ...rest: any[]
) => Paginator<ListLinkRoutingRulesCommandOutput> = createPaginator<
  RTBFabricPaginationConfiguration,
  ListLinkRoutingRulesCommandInput,
  ListLinkRoutingRulesCommandOutput
>(RTBFabricClient, ListLinkRoutingRulesCommand, "nextToken", "nextToken", "maxResults");
