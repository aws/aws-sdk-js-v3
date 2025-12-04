// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListRulesCommand, ListRulesCommandInput, ListRulesCommandOutput } from "../commands/ListRulesCommand";
import { VPCLatticeClient } from "../VPCLatticeClient";
import { VPCLatticePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRules: (
  config: VPCLatticePaginationConfiguration,
  input: ListRulesCommandInput,
  ...rest: any[]
) => Paginator<ListRulesCommandOutput> = createPaginator<
  VPCLatticePaginationConfiguration,
  ListRulesCommandInput,
  ListRulesCommandOutput
>(VPCLatticeClient, ListRulesCommand, "nextToken", "nextToken", "maxResults");
