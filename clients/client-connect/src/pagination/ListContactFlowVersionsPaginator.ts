// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListContactFlowVersionsCommand,
  ListContactFlowVersionsCommandInput,
  ListContactFlowVersionsCommandOutput,
} from "../commands/ListContactFlowVersionsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContactFlowVersions: (
  config: ConnectPaginationConfiguration,
  input: ListContactFlowVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListContactFlowVersionsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListContactFlowVersionsCommandInput,
  ListContactFlowVersionsCommandOutput
>(ConnectClient, ListContactFlowVersionsCommand, "NextToken", "NextToken", "MaxResults");
