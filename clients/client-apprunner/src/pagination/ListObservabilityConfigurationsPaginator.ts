// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppRunnerClient } from "../AppRunnerClient";
import {
  ListObservabilityConfigurationsCommand,
  ListObservabilityConfigurationsCommandInput,
  ListObservabilityConfigurationsCommandOutput,
} from "../commands/ListObservabilityConfigurationsCommand";
import { AppRunnerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListObservabilityConfigurations: (
  config: AppRunnerPaginationConfiguration,
  input: ListObservabilityConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListObservabilityConfigurationsCommandOutput> = createPaginator<
  AppRunnerPaginationConfiguration,
  ListObservabilityConfigurationsCommandInput,
  ListObservabilityConfigurationsCommandOutput
>(AppRunnerClient, ListObservabilityConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
