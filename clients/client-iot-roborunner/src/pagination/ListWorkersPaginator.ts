// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListWorkersCommand, ListWorkersCommandInput, ListWorkersCommandOutput } from "../commands/ListWorkersCommand";
import { IoTRoboRunnerClient } from "../IoTRoboRunnerClient";
import { IoTRoboRunnerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkers: (
  config: IoTRoboRunnerPaginationConfiguration,
  input: ListWorkersCommandInput,
  ...rest: any[]
) => Paginator<ListWorkersCommandOutput> = createPaginator<
  IoTRoboRunnerPaginationConfiguration,
  ListWorkersCommandInput,
  ListWorkersCommandOutput
>(IoTRoboRunnerClient, ListWorkersCommand, "nextToken", "nextToken", "maxResults");
