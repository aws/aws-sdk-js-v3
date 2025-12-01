// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListWorkspacePagesCommand,
  ListWorkspacePagesCommandInput,
  ListWorkspacePagesCommandOutput,
} from "../commands/ListWorkspacePagesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkspacePages: (
  config: ConnectPaginationConfiguration,
  input: ListWorkspacePagesCommandInput,
  ...rest: any[]
) => Paginator<ListWorkspacePagesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListWorkspacePagesCommandInput,
  ListWorkspacePagesCommandOutput
>(ConnectClient, ListWorkspacePagesCommand, "NextToken", "NextToken", "MaxResults");
