// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListScenesCommand, ListScenesCommandInput, ListScenesCommandOutput } from "../commands/ListScenesCommand";
import { IoTTwinMakerClient } from "../IoTTwinMakerClient";
import { IoTTwinMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListScenes: (
  config: IoTTwinMakerPaginationConfiguration,
  input: ListScenesCommandInput,
  ...rest: any[]
) => Paginator<ListScenesCommandOutput> = createPaginator<
  IoTTwinMakerPaginationConfiguration,
  ListScenesCommandInput,
  ListScenesCommandOutput
>(IoTTwinMakerClient, ListScenesCommand, "nextToken", "nextToken", "maxResults");
