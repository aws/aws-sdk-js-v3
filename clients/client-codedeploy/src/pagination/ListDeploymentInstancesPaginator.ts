// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeDeployClient } from "../CodeDeployClient";
import {
  ListDeploymentInstancesCommand,
  ListDeploymentInstancesCommandInput,
  ListDeploymentInstancesCommandOutput,
} from "../commands/ListDeploymentInstancesCommand";
import { CodeDeployPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDeploymentInstances: (
  config: CodeDeployPaginationConfiguration,
  input: ListDeploymentInstancesCommandInput,
  ...rest: any[]
) => Paginator<ListDeploymentInstancesCommandOutput> = createPaginator<
  CodeDeployPaginationConfiguration,
  ListDeploymentInstancesCommandInput,
  ListDeploymentInstancesCommandOutput
>(CodeDeployClient, ListDeploymentInstancesCommand, "nextToken", "nextToken", "");
