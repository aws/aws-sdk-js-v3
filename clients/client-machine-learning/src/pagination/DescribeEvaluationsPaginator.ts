// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeEvaluationsCommand,
  DescribeEvaluationsCommandInput,
  DescribeEvaluationsCommandOutput,
} from "../commands/DescribeEvaluationsCommand";
import { MachineLearningClient } from "../MachineLearningClient";
import { MachineLearningPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEvaluations: (
  config: MachineLearningPaginationConfiguration,
  input: DescribeEvaluationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeEvaluationsCommandOutput> = createPaginator<
  MachineLearningPaginationConfiguration,
  DescribeEvaluationsCommandInput,
  DescribeEvaluationsCommandOutput
>(MachineLearningClient, DescribeEvaluationsCommand, "NextToken", "NextToken", "Limit");
