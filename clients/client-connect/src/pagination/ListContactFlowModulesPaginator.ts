// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListContactFlowModulesCommand,
  ListContactFlowModulesCommandInput,
  ListContactFlowModulesCommandOutput,
} from "../commands/ListContactFlowModulesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContactFlowModules: (
  config: ConnectPaginationConfiguration,
  input: ListContactFlowModulesCommandInput,
  ...rest: any[]
) => Paginator<ListContactFlowModulesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListContactFlowModulesCommandInput,
  ListContactFlowModulesCommandOutput
>(ConnectClient, ListContactFlowModulesCommand, "NextToken", "NextToken", "MaxResults");
