// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppConfigClient } from "../AppConfigClient";
import {
  ListExperimentRunEventsCommand,
  ListExperimentRunEventsCommandInput,
  ListExperimentRunEventsCommandOutput,
} from "../commands/ListExperimentRunEventsCommand";
import type { AppConfigPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExperimentRunEvents: (
  config: AppConfigPaginationConfiguration,
  input: ListExperimentRunEventsCommandInput,
  ...rest: any[]
) => Paginator<ListExperimentRunEventsCommandOutput> = createPaginator<
  AppConfigPaginationConfiguration,
  ListExperimentRunEventsCommandInput,
  ListExperimentRunEventsCommandOutput
>(AppConfigClient, ListExperimentRunEventsCommand, "NextToken", "NextToken", "MaxResults");
