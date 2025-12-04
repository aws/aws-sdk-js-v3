// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ExecuteQueryCommand,
  ExecuteQueryCommandInput,
  ExecuteQueryCommandOutput,
} from "../commands/ExecuteQueryCommand";
import { IoTTwinMakerClient } from "../IoTTwinMakerClient";
import { IoTTwinMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateExecuteQuery: (
  config: IoTTwinMakerPaginationConfiguration,
  input: ExecuteQueryCommandInput,
  ...rest: any[]
) => Paginator<ExecuteQueryCommandOutput> = createPaginator<
  IoTTwinMakerPaginationConfiguration,
  ExecuteQueryCommandInput,
  ExecuteQueryCommandOutput
>(IoTTwinMakerClient, ExecuteQueryCommand, "nextToken", "nextToken", "maxResults");
