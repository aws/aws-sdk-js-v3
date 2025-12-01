// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetCanaryRunsCommand,
  GetCanaryRunsCommandInput,
  GetCanaryRunsCommandOutput,
} from "../commands/GetCanaryRunsCommand";
import { SyntheticsClient } from "../SyntheticsClient";
import { SyntheticsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetCanaryRuns: (
  config: SyntheticsPaginationConfiguration,
  input: GetCanaryRunsCommandInput,
  ...rest: any[]
) => Paginator<GetCanaryRunsCommandOutput> = createPaginator<
  SyntheticsPaginationConfiguration,
  GetCanaryRunsCommandInput,
  GetCanaryRunsCommandOutput
>(SyntheticsClient, GetCanaryRunsCommand, "NextToken", "NextToken", "MaxResults");
