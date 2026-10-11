// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListRulesCommand, ListRulesCommandInput, ListRulesCommandOutput } from "../commands/ListRulesCommand";
import { NetworkSecurityManagerClient } from "../NetworkSecurityManagerClient";
import type { NetworkSecurityManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRules: (
  config: NetworkSecurityManagerPaginationConfiguration,
  input: ListRulesCommandInput,
  ...rest: any[]
) => Paginator<ListRulesCommandOutput> = createPaginator<
  NetworkSecurityManagerPaginationConfiguration,
  ListRulesCommandInput,
  ListRulesCommandOutput
>(NetworkSecurityManagerClient, ListRulesCommand, "nextToken", "nextToken", "maxResults");
