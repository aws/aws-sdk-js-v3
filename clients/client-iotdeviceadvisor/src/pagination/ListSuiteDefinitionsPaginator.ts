// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSuiteDefinitionsCommand,
  ListSuiteDefinitionsCommandInput,
  ListSuiteDefinitionsCommandOutput,
} from "../commands/ListSuiteDefinitionsCommand";
import { IotDeviceAdvisorClient } from "../IotDeviceAdvisorClient";
import { IotDeviceAdvisorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSuiteDefinitions: (
  config: IotDeviceAdvisorPaginationConfiguration,
  input: ListSuiteDefinitionsCommandInput,
  ...rest: any[]
) => Paginator<ListSuiteDefinitionsCommandOutput> = createPaginator<
  IotDeviceAdvisorPaginationConfiguration,
  ListSuiteDefinitionsCommandInput,
  ListSuiteDefinitionsCommandOutput
>(IotDeviceAdvisorClient, ListSuiteDefinitionsCommand, "nextToken", "nextToken", "maxResults");
