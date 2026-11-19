// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDeploymentConfigurationJobsCommand,
  ListDeploymentConfigurationJobsCommandInput,
  ListDeploymentConfigurationJobsCommandOutput,
} from "../commands/ListDeploymentConfigurationJobsCommand";
import { MarketplaceDeploymentClient } from "../MarketplaceDeploymentClient";
import type { MarketplaceDeploymentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDeploymentConfigurationJobs: (
  config: MarketplaceDeploymentPaginationConfiguration,
  input: ListDeploymentConfigurationJobsCommandInput,
  ...rest: any[]
) => Paginator<ListDeploymentConfigurationJobsCommandOutput> = createPaginator<
  MarketplaceDeploymentPaginationConfiguration,
  ListDeploymentConfigurationJobsCommandInput,
  ListDeploymentConfigurationJobsCommandOutput
>(MarketplaceDeploymentClient, ListDeploymentConfigurationJobsCommand, "nextToken", "nextToken", "maxResults");
