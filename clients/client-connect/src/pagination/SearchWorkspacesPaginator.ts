// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchWorkspacesCommand,
  SearchWorkspacesCommandInput,
  SearchWorkspacesCommandOutput,
} from "../commands/SearchWorkspacesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchWorkspaces: (
  config: ConnectPaginationConfiguration,
  input: SearchWorkspacesCommandInput,
  ...rest: any[]
) => Paginator<SearchWorkspacesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  SearchWorkspacesCommandInput,
  SearchWorkspacesCommandOutput
>(ConnectClient, SearchWorkspacesCommand, "NextToken", "NextToken", "MaxResults");
