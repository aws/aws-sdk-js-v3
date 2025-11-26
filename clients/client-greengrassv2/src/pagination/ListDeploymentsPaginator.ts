// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDeploymentsCommand,
  ListDeploymentsCommandInput,
  ListDeploymentsCommandOutput,
} from "../commands/ListDeploymentsCommand";
import { GreengrassV2Client } from "../GreengrassV2Client";
import { GreengrassV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDeployments: (
  config: GreengrassV2PaginationConfiguration,
  input: ListDeploymentsCommandInput,
  ...rest: any[]
) => Paginator<ListDeploymentsCommandOutput> = createPaginator<
  GreengrassV2PaginationConfiguration,
  ListDeploymentsCommandInput,
  ListDeploymentsCommandOutput
>(GreengrassV2Client, ListDeploymentsCommand, "nextToken", "nextToken", "maxResults");
