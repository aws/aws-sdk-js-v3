// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetPropertyValueCommand,
  GetPropertyValueCommandInput,
  GetPropertyValueCommandOutput,
} from "../commands/GetPropertyValueCommand";
import { IoTTwinMakerClient } from "../IoTTwinMakerClient";
import { IoTTwinMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetPropertyValue: (
  config: IoTTwinMakerPaginationConfiguration,
  input: GetPropertyValueCommandInput,
  ...rest: any[]
) => Paginator<GetPropertyValueCommandOutput> = createPaginator<
  IoTTwinMakerPaginationConfiguration,
  GetPropertyValueCommandInput,
  GetPropertyValueCommandOutput
>(IoTTwinMakerClient, GetPropertyValueCommand, "nextToken", "nextToken", "maxResults");
