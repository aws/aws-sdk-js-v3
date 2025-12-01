// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  SearchWorkspaceAssociationsCommand,
  SearchWorkspaceAssociationsCommandInput,
  SearchWorkspaceAssociationsCommandOutput,
} from "../commands/SearchWorkspaceAssociationsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchWorkspaceAssociations: (
  config: ConnectPaginationConfiguration,
  input: SearchWorkspaceAssociationsCommandInput,
  ...rest: any[]
) => Paginator<SearchWorkspaceAssociationsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  SearchWorkspaceAssociationsCommandInput,
  SearchWorkspaceAssociationsCommandOutput
>(ConnectClient, SearchWorkspaceAssociationsCommand, "NextToken", "NextToken", "MaxResults");
