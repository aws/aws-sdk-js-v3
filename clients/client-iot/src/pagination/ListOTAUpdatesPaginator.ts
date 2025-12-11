// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOTAUpdatesCommand,
  ListOTAUpdatesCommandInput,
  ListOTAUpdatesCommandOutput,
} from "../commands/ListOTAUpdatesCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOTAUpdates: (
  config: IoTPaginationConfiguration,
  input: ListOTAUpdatesCommandInput,
  ...rest: any[]
) => Paginator<ListOTAUpdatesCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListOTAUpdatesCommandInput,
  ListOTAUpdatesCommandOutput
>(IoTClient, ListOTAUpdatesCommand, "nextToken", "nextToken", "maxResults");
