// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetPropertyValueHistoryCommand,
  GetPropertyValueHistoryCommandInput,
  GetPropertyValueHistoryCommandOutput,
} from "../commands/GetPropertyValueHistoryCommand";
import { IoTTwinMakerClient } from "../IoTTwinMakerClient";
import { IoTTwinMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetPropertyValueHistory: (
  config: IoTTwinMakerPaginationConfiguration,
  input: GetPropertyValueHistoryCommandInput,
  ...rest: any[]
) => Paginator<GetPropertyValueHistoryCommandOutput> = createPaginator<
  IoTTwinMakerPaginationConfiguration,
  GetPropertyValueHistoryCommandInput,
  GetPropertyValueHistoryCommandOutput
>(IoTTwinMakerClient, GetPropertyValueHistoryCommand, "nextToken", "nextToken", "maxResults");
