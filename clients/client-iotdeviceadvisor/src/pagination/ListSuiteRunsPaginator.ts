// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSuiteRunsCommand,
  ListSuiteRunsCommandInput,
  ListSuiteRunsCommandOutput,
} from "../commands/ListSuiteRunsCommand";
import { IotDeviceAdvisorClient } from "../IotDeviceAdvisorClient";
import { IotDeviceAdvisorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSuiteRuns: (
  config: IotDeviceAdvisorPaginationConfiguration,
  input: ListSuiteRunsCommandInput,
  ...rest: any[]
) => Paginator<ListSuiteRunsCommandOutput> = createPaginator<
  IotDeviceAdvisorPaginationConfiguration,
  ListSuiteRunsCommandInput,
  ListSuiteRunsCommandOutput
>(IotDeviceAdvisorClient, ListSuiteRunsCommand, "nextToken", "nextToken", "maxResults");
