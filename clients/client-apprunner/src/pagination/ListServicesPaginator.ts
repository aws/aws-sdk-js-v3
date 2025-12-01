// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppRunnerClient } from "../AppRunnerClient";
import {
  ListServicesCommand,
  ListServicesCommandInput,
  ListServicesCommandOutput,
} from "../commands/ListServicesCommand";
import { AppRunnerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServices: (
  config: AppRunnerPaginationConfiguration,
  input: ListServicesCommandInput,
  ...rest: any[]
) => Paginator<ListServicesCommandOutput> = createPaginator<
  AppRunnerPaginationConfiguration,
  ListServicesCommandInput,
  ListServicesCommandOutput
>(AppRunnerClient, ListServicesCommand, "NextToken", "NextToken", "MaxResults");
