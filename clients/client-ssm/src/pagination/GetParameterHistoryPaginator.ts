// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetParameterHistoryCommand,
  GetParameterHistoryCommandInput,
  GetParameterHistoryCommandOutput,
} from "../commands/GetParameterHistoryCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetParameterHistory: (
  config: SSMPaginationConfiguration,
  input: GetParameterHistoryCommandInput,
  ...rest: any[]
) => Paginator<GetParameterHistoryCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  GetParameterHistoryCommandInput,
  GetParameterHistoryCommandOutput
>(SSMClient, GetParameterHistoryCommand, "NextToken", "NextToken", "MaxResults");
