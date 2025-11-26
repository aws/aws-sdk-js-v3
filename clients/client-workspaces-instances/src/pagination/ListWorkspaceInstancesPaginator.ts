// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkspaceInstancesCommand,
  ListWorkspaceInstancesCommandInput,
  ListWorkspaceInstancesCommandOutput,
} from "../commands/ListWorkspaceInstancesCommand";
import { WorkspacesInstancesClient } from "../WorkspacesInstancesClient";
import { WorkspacesInstancesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkspaceInstances: (
  config: WorkspacesInstancesPaginationConfiguration,
  input: ListWorkspaceInstancesCommandInput,
  ...rest: any[]
) => Paginator<ListWorkspaceInstancesCommandOutput> = createPaginator<
  WorkspacesInstancesPaginationConfiguration,
  ListWorkspaceInstancesCommandInput,
  ListWorkspaceInstancesCommandOutput
>(WorkspacesInstancesClient, ListWorkspaceInstancesCommand, "NextToken", "NextToken", "MaxResults");
