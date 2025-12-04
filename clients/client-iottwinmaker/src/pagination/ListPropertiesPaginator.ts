// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPropertiesCommand,
  ListPropertiesCommandInput,
  ListPropertiesCommandOutput,
} from "../commands/ListPropertiesCommand";
import { IoTTwinMakerClient } from "../IoTTwinMakerClient";
import { IoTTwinMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProperties: (
  config: IoTTwinMakerPaginationConfiguration,
  input: ListPropertiesCommandInput,
  ...rest: any[]
) => Paginator<ListPropertiesCommandOutput> = createPaginator<
  IoTTwinMakerPaginationConfiguration,
  ListPropertiesCommandInput,
  ListPropertiesCommandOutput
>(IoTTwinMakerClient, ListPropertiesCommand, "nextToken", "nextToken", "maxResults");
