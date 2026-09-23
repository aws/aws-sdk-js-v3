// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDeploymentsCommand,
  ListDeploymentsCommandInput,
  ListDeploymentsCommandOutput,
} from "../commands/ListDeploymentsCommand";
import { NetworkSecurityManagerClient } from "../NetworkSecurityManagerClient";
import type { NetworkSecurityManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDeployments: (
  config: NetworkSecurityManagerPaginationConfiguration,
  input: ListDeploymentsCommandInput,
  ...rest: any[]
) => Paginator<ListDeploymentsCommandOutput> = createPaginator<
  NetworkSecurityManagerPaginationConfiguration,
  ListDeploymentsCommandInput,
  ListDeploymentsCommandOutput
>(NetworkSecurityManagerClient, ListDeploymentsCommand, "nextToken", "nextToken", "maxResults");
