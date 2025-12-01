// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ExecuteQueryCommand,
  ExecuteQueryCommandInput,
  ExecuteQueryCommandOutput,
} from "../commands/ExecuteQueryCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateExecuteQuery: (
  config: IoTSiteWisePaginationConfiguration,
  input: ExecuteQueryCommandInput,
  ...rest: any[]
) => Paginator<ExecuteQueryCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ExecuteQueryCommandInput,
  ExecuteQueryCommandOutput
>(IoTSiteWiseClient, ExecuteQueryCommand, "nextToken", "nextToken", "maxResults");
