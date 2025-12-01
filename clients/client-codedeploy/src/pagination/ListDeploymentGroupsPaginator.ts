// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeDeployClient } from "../CodeDeployClient";
import {
  ListDeploymentGroupsCommand,
  ListDeploymentGroupsCommandInput,
  ListDeploymentGroupsCommandOutput,
} from "../commands/ListDeploymentGroupsCommand";
import { CodeDeployPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDeploymentGroups: (
  config: CodeDeployPaginationConfiguration,
  input: ListDeploymentGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListDeploymentGroupsCommandOutput> = createPaginator<
  CodeDeployPaginationConfiguration,
  ListDeploymentGroupsCommandInput,
  ListDeploymentGroupsCommandOutput
>(CodeDeployClient, ListDeploymentGroupsCommand, "nextToken", "nextToken", "");
