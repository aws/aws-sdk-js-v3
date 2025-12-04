// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppConfigClient } from "../AppConfigClient";
import {
  ListDeploymentStrategiesCommand,
  ListDeploymentStrategiesCommandInput,
  ListDeploymentStrategiesCommandOutput,
} from "../commands/ListDeploymentStrategiesCommand";
import { AppConfigPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDeploymentStrategies: (
  config: AppConfigPaginationConfiguration,
  input: ListDeploymentStrategiesCommandInput,
  ...rest: any[]
) => Paginator<ListDeploymentStrategiesCommandOutput> = createPaginator<
  AppConfigPaginationConfiguration,
  ListDeploymentStrategiesCommandInput,
  ListDeploymentStrategiesCommandOutput
>(AppConfigClient, ListDeploymentStrategiesCommand, "NextToken", "NextToken", "MaxResults");
