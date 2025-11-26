// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDeploymentsCommand,
  ListDeploymentsCommandInput,
  ListDeploymentsCommandOutput,
} from "../commands/ListDeploymentsCommand";
import { M2Client } from "../M2Client";
import { M2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDeployments: (
  config: M2PaginationConfiguration,
  input: ListDeploymentsCommandInput,
  ...rest: any[]
) => Paginator<ListDeploymentsCommandOutput> = createPaginator<
  M2PaginationConfiguration,
  ListDeploymentsCommandInput,
  ListDeploymentsCommandOutput
>(M2Client, ListDeploymentsCommand, "nextToken", "nextToken", "maxResults");
