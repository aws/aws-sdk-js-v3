// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppConfigClient } from "../AppConfigClient";
import {
  ListExperimentRunsCommand,
  ListExperimentRunsCommandInput,
  ListExperimentRunsCommandOutput,
} from "../commands/ListExperimentRunsCommand";
import type { AppConfigPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExperimentRuns: (
  config: AppConfigPaginationConfiguration,
  input: ListExperimentRunsCommandInput,
  ...rest: any[]
) => Paginator<ListExperimentRunsCommandOutput> = createPaginator<
  AppConfigPaginationConfiguration,
  ListExperimentRunsCommandInput,
  ListExperimentRunsCommandOutput
>(AppConfigClient, ListExperimentRunsCommand, "NextToken", "NextToken", "MaxResults");
