// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListContactFlowModuleVersionsCommand,
  ListContactFlowModuleVersionsCommandInput,
  ListContactFlowModuleVersionsCommandOutput,
} from "../commands/ListContactFlowModuleVersionsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContactFlowModuleVersions: (
  config: ConnectPaginationConfiguration,
  input: ListContactFlowModuleVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListContactFlowModuleVersionsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListContactFlowModuleVersionsCommandInput,
  ListContactFlowModuleVersionsCommandOutput
>(ConnectClient, ListContactFlowModuleVersionsCommand, "NextToken", "NextToken", "MaxResults");
