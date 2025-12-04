// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListComponentsCommand,
  ListComponentsCommandInput,
  ListComponentsCommandOutput,
} from "../commands/ListComponentsCommand";
import { IoTTwinMakerClient } from "../IoTTwinMakerClient";
import { IoTTwinMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListComponents: (
  config: IoTTwinMakerPaginationConfiguration,
  input: ListComponentsCommandInput,
  ...rest: any[]
) => Paginator<ListComponentsCommandOutput> = createPaginator<
  IoTTwinMakerPaginationConfiguration,
  ListComponentsCommandInput,
  ListComponentsCommandOutput
>(IoTTwinMakerClient, ListComponentsCommand, "nextToken", "nextToken", "maxResults");
