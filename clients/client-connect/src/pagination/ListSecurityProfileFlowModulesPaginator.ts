// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSecurityProfileFlowModulesCommand,
  ListSecurityProfileFlowModulesCommandInput,
  ListSecurityProfileFlowModulesCommandOutput,
} from "../commands/ListSecurityProfileFlowModulesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSecurityProfileFlowModules: (
  config: ConnectPaginationConfiguration,
  input: ListSecurityProfileFlowModulesCommandInput,
  ...rest: any[]
) => Paginator<ListSecurityProfileFlowModulesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListSecurityProfileFlowModulesCommandInput,
  ListSecurityProfileFlowModulesCommandOutput
>(ConnectClient, ListSecurityProfileFlowModulesCommand, "NextToken", "NextToken", "MaxResults");
