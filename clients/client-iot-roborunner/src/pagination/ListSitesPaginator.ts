// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListSitesCommand, ListSitesCommandInput, ListSitesCommandOutput } from "../commands/ListSitesCommand";
import { IoTRoboRunnerClient } from "../IoTRoboRunnerClient";
import { IoTRoboRunnerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSites: (
  config: IoTRoboRunnerPaginationConfiguration,
  input: ListSitesCommandInput,
  ...rest: any[]
) => Paginator<ListSitesCommandOutput> = createPaginator<
  IoTRoboRunnerPaginationConfiguration,
  ListSitesCommandInput,
  ListSitesCommandOutput
>(IoTRoboRunnerClient, ListSitesCommand, "nextToken", "nextToken", "maxResults");
