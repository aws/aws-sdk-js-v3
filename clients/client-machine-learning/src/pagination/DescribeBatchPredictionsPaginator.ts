// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeBatchPredictionsCommand,
  DescribeBatchPredictionsCommandInput,
  DescribeBatchPredictionsCommandOutput,
} from "../commands/DescribeBatchPredictionsCommand";
import { MachineLearningClient } from "../MachineLearningClient";
import { MachineLearningPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeBatchPredictions: (
  config: MachineLearningPaginationConfiguration,
  input: DescribeBatchPredictionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeBatchPredictionsCommandOutput> = createPaginator<
  MachineLearningPaginationConfiguration,
  DescribeBatchPredictionsCommandInput,
  DescribeBatchPredictionsCommandOutput
>(MachineLearningClient, DescribeBatchPredictionsCommand, "NextToken", "NextToken", "Limit");
