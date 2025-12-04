// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeDeployClient } from "../CodeDeployClient";
import {
  ListDeploymentsCommand,
  ListDeploymentsCommandInput,
  ListDeploymentsCommandOutput,
} from "../commands/ListDeploymentsCommand";
import { CodeDeployPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDeployments: (
  config: CodeDeployPaginationConfiguration,
  input: ListDeploymentsCommandInput,
  ...rest: any[]
) => Paginator<ListDeploymentsCommandOutput> = createPaginator<
  CodeDeployPaginationConfiguration,
  ListDeploymentsCommandInput,
  ListDeploymentsCommandOutput
>(CodeDeployClient, ListDeploymentsCommand, "nextToken", "nextToken", "");
