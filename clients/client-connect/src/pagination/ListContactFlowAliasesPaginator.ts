// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListContactFlowAliasesCommand,
  ListContactFlowAliasesCommandInput,
  ListContactFlowAliasesCommandOutput,
} from "../commands/ListContactFlowAliasesCommand";
import { ConnectClient } from "../ConnectClient";
import type { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContactFlowAliases: (
  config: ConnectPaginationConfiguration,
  input: ListContactFlowAliasesCommandInput,
  ...rest: any[]
) => Paginator<ListContactFlowAliasesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListContactFlowAliasesCommandInput,
  ListContactFlowAliasesCommandOutput
>(ConnectClient, ListContactFlowAliasesCommand, "NextToken", "NextToken", "MaxResults");
