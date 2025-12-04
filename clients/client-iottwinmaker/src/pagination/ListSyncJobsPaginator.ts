// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSyncJobsCommand,
  ListSyncJobsCommandInput,
  ListSyncJobsCommandOutput,
} from "../commands/ListSyncJobsCommand";
import { IoTTwinMakerClient } from "../IoTTwinMakerClient";
import { IoTTwinMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSyncJobs: (
  config: IoTTwinMakerPaginationConfiguration,
  input: ListSyncJobsCommandInput,
  ...rest: any[]
) => Paginator<ListSyncJobsCommandOutput> = createPaginator<
  IoTTwinMakerPaginationConfiguration,
  ListSyncJobsCommandInput,
  ListSyncJobsCommandOutput
>(IoTTwinMakerClient, ListSyncJobsCommand, "nextToken", "nextToken", "maxResults");
