// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeMLModelsCommand,
  DescribeMLModelsCommandInput,
  DescribeMLModelsCommandOutput,
} from "../commands/DescribeMLModelsCommand";
import { MachineLearningClient } from "../MachineLearningClient";
import { MachineLearningPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeMLModels: (
  config: MachineLearningPaginationConfiguration,
  input: DescribeMLModelsCommandInput,
  ...rest: any[]
) => Paginator<DescribeMLModelsCommandOutput> = createPaginator<
  MachineLearningPaginationConfiguration,
  DescribeMLModelsCommandInput,
  DescribeMLModelsCommandOutput
>(MachineLearningClient, DescribeMLModelsCommand, "NextToken", "NextToken", "Limit");
