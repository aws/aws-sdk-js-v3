// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListV2LoggingLevelsCommand,
  ListV2LoggingLevelsCommandInput,
  ListV2LoggingLevelsCommandOutput,
} from "../commands/ListV2LoggingLevelsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListV2LoggingLevels: (
  config: IoTPaginationConfiguration,
  input: ListV2LoggingLevelsCommandInput,
  ...rest: any[]
) => Paginator<ListV2LoggingLevelsCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListV2LoggingLevelsCommandInput,
  ListV2LoggingLevelsCommandOutput
>(IoTClient, ListV2LoggingLevelsCommand, "nextToken", "nextToken", "maxResults");
