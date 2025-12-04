// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEntitiesCommand,
  ListEntitiesCommandInput,
  ListEntitiesCommandOutput,
} from "../commands/ListEntitiesCommand";
import { IoTTwinMakerClient } from "../IoTTwinMakerClient";
import { IoTTwinMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEntities: (
  config: IoTTwinMakerPaginationConfiguration,
  input: ListEntitiesCommandInput,
  ...rest: any[]
) => Paginator<ListEntitiesCommandOutput> = createPaginator<
  IoTTwinMakerPaginationConfiguration,
  ListEntitiesCommandInput,
  ListEntitiesCommandOutput
>(IoTTwinMakerClient, ListEntitiesCommand, "nextToken", "nextToken", "maxResults");
