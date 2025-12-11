// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListRulesCommand, ListRulesCommandInput, ListRulesCommandOutput } from "../commands/ListRulesCommand";
import { RbinClient } from "../RbinClient";
import { RbinPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRules: (
  config: RbinPaginationConfiguration,
  input: ListRulesCommandInput,
  ...rest: any[]
) => Paginator<ListRulesCommandOutput> = createPaginator<
  RbinPaginationConfiguration,
  ListRulesCommandInput,
  ListRulesCommandOutput
>(RbinClient, ListRulesCommand, "NextToken", "NextToken", "MaxResults");
