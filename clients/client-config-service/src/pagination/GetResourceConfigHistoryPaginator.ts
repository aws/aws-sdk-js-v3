// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetResourceConfigHistoryCommand,
  GetResourceConfigHistoryCommandInput,
  GetResourceConfigHistoryCommandOutput,
} from "../commands/GetResourceConfigHistoryCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetResourceConfigHistory: (
  config: ConfigServicePaginationConfiguration,
  input: GetResourceConfigHistoryCommandInput,
  ...rest: any[]
) => Paginator<GetResourceConfigHistoryCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  GetResourceConfigHistoryCommandInput,
  GetResourceConfigHistoryCommandOutput
>(ConfigServiceClient, GetResourceConfigHistoryCommand, "nextToken", "nextToken", "limit");
