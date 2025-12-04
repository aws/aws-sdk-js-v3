// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppConfigClient } from "../AppConfigClient";
import {
  ListDeploymentsCommand,
  ListDeploymentsCommandInput,
  ListDeploymentsCommandOutput,
} from "../commands/ListDeploymentsCommand";
import { AppConfigPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDeployments: (
  config: AppConfigPaginationConfiguration,
  input: ListDeploymentsCommandInput,
  ...rest: any[]
) => Paginator<ListDeploymentsCommandOutput> = createPaginator<
  AppConfigPaginationConfiguration,
  ListDeploymentsCommandInput,
  ListDeploymentsCommandOutput
>(AppConfigClient, ListDeploymentsCommand, "NextToken", "NextToken", "MaxResults");
