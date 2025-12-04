// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetOpsSummaryCommand,
  GetOpsSummaryCommandInput,
  GetOpsSummaryCommandOutput,
} from "../commands/GetOpsSummaryCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetOpsSummary: (
  config: SSMPaginationConfiguration,
  input: GetOpsSummaryCommandInput,
  ...rest: any[]
) => Paginator<GetOpsSummaryCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  GetOpsSummaryCommandInput,
  GetOpsSummaryCommandOutput
>(SSMClient, GetOpsSummaryCommand, "NextToken", "NextToken", "MaxResults");
