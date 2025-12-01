// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListRulesCommand, ListRulesCommandInput, ListRulesCommandOutput } from "../commands/ListRulesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRules: (
  config: ConnectPaginationConfiguration,
  input: ListRulesCommandInput,
  ...rest: any[]
) => Paginator<ListRulesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListRulesCommandInput,
  ListRulesCommandOutput
>(ConnectClient, ListRulesCommand, "NextToken", "NextToken", "MaxResults");
