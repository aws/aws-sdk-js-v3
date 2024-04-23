// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "../commands/ListApplicationsCommand";
import { IoTFleetHubClient } from "../IoTFleetHubClient";
import { IoTFleetHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplications: (
  config: IoTFleetHubPaginationConfiguration,
  input: ListApplicationsCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationsCommandOutput> = createPaginator<
  IoTFleetHubPaginationConfiguration,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput
>(IoTFleetHubClient, ListApplicationsCommand, "nextToken", "nextToken", "");
