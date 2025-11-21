// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListContactFlowModuleAliasesCommand,
  ListContactFlowModuleAliasesCommandInput,
  ListContactFlowModuleAliasesCommandOutput,
} from "../commands/ListContactFlowModuleAliasesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContactFlowModuleAliases: (
  config: ConnectPaginationConfiguration,
  input: ListContactFlowModuleAliasesCommandInput,
  ...rest: any[]
) => Paginator<ListContactFlowModuleAliasesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListContactFlowModuleAliasesCommandInput,
  ListContactFlowModuleAliasesCommandOutput
>(ConnectClient, ListContactFlowModuleAliasesCommand, "NextToken", "NextToken", "MaxResults");
