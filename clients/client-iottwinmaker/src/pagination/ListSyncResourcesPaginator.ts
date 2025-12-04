// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSyncResourcesCommand,
  ListSyncResourcesCommandInput,
  ListSyncResourcesCommandOutput,
} from "../commands/ListSyncResourcesCommand";
import { IoTTwinMakerClient } from "../IoTTwinMakerClient";
import { IoTTwinMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSyncResources: (
  config: IoTTwinMakerPaginationConfiguration,
  input: ListSyncResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListSyncResourcesCommandOutput> = createPaginator<
  IoTTwinMakerPaginationConfiguration,
  ListSyncResourcesCommandInput,
  ListSyncResourcesCommandOutput
>(IoTTwinMakerClient, ListSyncResourcesCommand, "nextToken", "nextToken", "maxResults");
