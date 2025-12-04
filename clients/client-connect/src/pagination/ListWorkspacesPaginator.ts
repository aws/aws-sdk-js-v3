// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkspacesCommand,
  ListWorkspacesCommandInput,
  ListWorkspacesCommandOutput,
} from "../commands/ListWorkspacesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkspaces: (
  config: ConnectPaginationConfiguration,
  input: ListWorkspacesCommandInput,
  ...rest: any[]
) => Paginator<ListWorkspacesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListWorkspacesCommandInput,
  ListWorkspacesCommandOutput
>(ConnectClient, ListWorkspacesCommand, "NextToken", "NextToken", "MaxResults");
