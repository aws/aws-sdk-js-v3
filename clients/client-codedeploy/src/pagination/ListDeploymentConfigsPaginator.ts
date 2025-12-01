// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeDeployClient } from "../CodeDeployClient";
import {
  ListDeploymentConfigsCommand,
  ListDeploymentConfigsCommandInput,
  ListDeploymentConfigsCommandOutput,
} from "../commands/ListDeploymentConfigsCommand";
import { CodeDeployPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDeploymentConfigs: (
  config: CodeDeployPaginationConfiguration,
  input: ListDeploymentConfigsCommandInput,
  ...rest: any[]
) => Paginator<ListDeploymentConfigsCommandOutput> = createPaginator<
  CodeDeployPaginationConfiguration,
  ListDeploymentConfigsCommandInput,
  ListDeploymentConfigsCommandOutput
>(CodeDeployClient, ListDeploymentConfigsCommand, "nextToken", "nextToken", "");
