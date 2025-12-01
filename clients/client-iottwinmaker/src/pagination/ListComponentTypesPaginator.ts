// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListComponentTypesCommand,
  ListComponentTypesCommandInput,
  ListComponentTypesCommandOutput,
} from "../commands/ListComponentTypesCommand";
import { IoTTwinMakerClient } from "../IoTTwinMakerClient";
import { IoTTwinMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListComponentTypes: (
  config: IoTTwinMakerPaginationConfiguration,
  input: ListComponentTypesCommandInput,
  ...rest: any[]
) => Paginator<ListComponentTypesCommandOutput> = createPaginator<
  IoTTwinMakerPaginationConfiguration,
  ListComponentTypesCommandInput,
  ListComponentTypesCommandOutput
>(IoTTwinMakerClient, ListComponentTypesCommand, "nextToken", "nextToken", "maxResults");
