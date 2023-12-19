// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListWorkerFleetsCommand,
  ListWorkerFleetsCommandInput,
  ListWorkerFleetsCommandOutput,
} from "../commands/ListWorkerFleetsCommand";
import { IoTRoboRunnerClient } from "../IoTRoboRunnerClient";
import { IoTRoboRunnerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkerFleets: (
  config: IoTRoboRunnerPaginationConfiguration,
  input: ListWorkerFleetsCommandInput,
  ...rest: any[]
) => Paginator<ListWorkerFleetsCommandOutput> = createPaginator<
  IoTRoboRunnerPaginationConfiguration,
  ListWorkerFleetsCommandInput,
  ListWorkerFleetsCommandOutput
>(IoTRoboRunnerClient, ListWorkerFleetsCommand, "nextToken", "nextToken", "maxResults");
