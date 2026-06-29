// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppConfigClient } from "../AppConfigClient";
import {
  ListExperimentDefinitionsCommand,
  ListExperimentDefinitionsCommandInput,
  ListExperimentDefinitionsCommandOutput,
} from "../commands/ListExperimentDefinitionsCommand";
import type { AppConfigPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExperimentDefinitions: (
  config: AppConfigPaginationConfiguration,
  input: ListExperimentDefinitionsCommandInput,
  ...rest: any[]
) => Paginator<ListExperimentDefinitionsCommandOutput> = createPaginator<
  AppConfigPaginationConfiguration,
  ListExperimentDefinitionsCommandInput,
  ListExperimentDefinitionsCommandOutput
>(AppConfigClient, ListExperimentDefinitionsCommand, "NextToken", "NextToken", "MaxResults");
