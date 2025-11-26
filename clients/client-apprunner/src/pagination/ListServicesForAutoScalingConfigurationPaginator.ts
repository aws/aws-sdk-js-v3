// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppRunnerClient } from "../AppRunnerClient";
import {
  ListServicesForAutoScalingConfigurationCommand,
  ListServicesForAutoScalingConfigurationCommandInput,
  ListServicesForAutoScalingConfigurationCommandOutput,
} from "../commands/ListServicesForAutoScalingConfigurationCommand";
import { AppRunnerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServicesForAutoScalingConfiguration: (
  config: AppRunnerPaginationConfiguration,
  input: ListServicesForAutoScalingConfigurationCommandInput,
  ...rest: any[]
) => Paginator<ListServicesForAutoScalingConfigurationCommandOutput> = createPaginator<
  AppRunnerPaginationConfiguration,
  ListServicesForAutoScalingConfigurationCommandInput,
  ListServicesForAutoScalingConfigurationCommandOutput
>(AppRunnerClient, ListServicesForAutoScalingConfigurationCommand, "NextToken", "NextToken", "MaxResults");
