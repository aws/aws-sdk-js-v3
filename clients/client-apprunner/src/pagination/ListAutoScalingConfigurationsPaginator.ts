// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppRunnerClient } from "../AppRunnerClient";
import {
  ListAutoScalingConfigurationsCommand,
  ListAutoScalingConfigurationsCommandInput,
  ListAutoScalingConfigurationsCommandOutput,
} from "../commands/ListAutoScalingConfigurationsCommand";
import { AppRunnerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAutoScalingConfigurations: (
  config: AppRunnerPaginationConfiguration,
  input: ListAutoScalingConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListAutoScalingConfigurationsCommandOutput> = createPaginator<
  AppRunnerPaginationConfiguration,
  ListAutoScalingConfigurationsCommandInput,
  ListAutoScalingConfigurationsCommandOutput
>(AppRunnerClient, ListAutoScalingConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
