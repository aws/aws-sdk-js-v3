// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetExecutionHistoryCommand,
  GetExecutionHistoryCommandInput,
  GetExecutionHistoryCommandOutput,
} from "../commands/GetExecutionHistoryCommand";
import { SFNClient } from "../SFNClient";
import { SFNPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetExecutionHistory: (
  config: SFNPaginationConfiguration,
  input: GetExecutionHistoryCommandInput,
  ...rest: any[]
) => Paginator<GetExecutionHistoryCommandOutput> = createPaginator<
  SFNPaginationConfiguration,
  GetExecutionHistoryCommandInput,
  GetExecutionHistoryCommandOutput
>(SFNClient, GetExecutionHistoryCommand, "nextToken", "nextToken", "maxResults");
