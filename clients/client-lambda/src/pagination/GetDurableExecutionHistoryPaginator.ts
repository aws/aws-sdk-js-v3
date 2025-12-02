// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  GetDurableExecutionHistoryCommand,
  GetDurableExecutionHistoryCommandInput,
  GetDurableExecutionHistoryCommandOutput,
} from "../commands/GetDurableExecutionHistoryCommand";
import { LambdaClient } from "../LambdaClient";
import { LambdaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetDurableExecutionHistory: (
  config: LambdaPaginationConfiguration,
  input: GetDurableExecutionHistoryCommandInput,
  ...rest: any[]
) => Paginator<GetDurableExecutionHistoryCommandOutput> = createPaginator<
  LambdaPaginationConfiguration,
  GetDurableExecutionHistoryCommandInput,
  GetDurableExecutionHistoryCommandOutput
>(LambdaClient, GetDurableExecutionHistoryCommand, "Marker", "NextMarker", "MaxItems");
