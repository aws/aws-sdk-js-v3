// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListDestinationsCommand,
  ListDestinationsCommandInput,
  ListDestinationsCommandOutput,
} from "../commands/ListDestinationsCommand";
import { IoTRoboRunnerClient } from "../IoTRoboRunnerClient";
import { IoTRoboRunnerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDestinations: (
  config: IoTRoboRunnerPaginationConfiguration,
  input: ListDestinationsCommandInput,
  ...rest: any[]
) => Paginator<ListDestinationsCommandOutput> = createPaginator<
  IoTRoboRunnerPaginationConfiguration,
  ListDestinationsCommandInput,
  ListDestinationsCommandOutput
>(IoTRoboRunnerClient, ListDestinationsCommand, "nextToken", "nextToken", "maxResults");
