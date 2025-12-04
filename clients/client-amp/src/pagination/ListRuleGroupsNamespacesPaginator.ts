// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AmpClient } from "../AmpClient";
import {
  ListRuleGroupsNamespacesCommand,
  ListRuleGroupsNamespacesCommandInput,
  ListRuleGroupsNamespacesCommandOutput,
} from "../commands/ListRuleGroupsNamespacesCommand";
import { AmpPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRuleGroupsNamespaces: (
  config: AmpPaginationConfiguration,
  input: ListRuleGroupsNamespacesCommandInput,
  ...rest: any[]
) => Paginator<ListRuleGroupsNamespacesCommandOutput> = createPaginator<
  AmpPaginationConfiguration,
  ListRuleGroupsNamespacesCommandInput,
  ListRuleGroupsNamespacesCommandOutput
>(AmpClient, ListRuleGroupsNamespacesCommand, "nextToken", "nextToken", "maxResults");
