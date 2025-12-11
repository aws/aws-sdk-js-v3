// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDataSourcesCommand,
  DescribeDataSourcesCommandInput,
  DescribeDataSourcesCommandOutput,
} from "../commands/DescribeDataSourcesCommand";
import { MachineLearningClient } from "../MachineLearningClient";
import { MachineLearningPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDataSources: (
  config: MachineLearningPaginationConfiguration,
  input: DescribeDataSourcesCommandInput,
  ...rest: any[]
) => Paginator<DescribeDataSourcesCommandOutput> = createPaginator<
  MachineLearningPaginationConfiguration,
  DescribeDataSourcesCommandInput,
  DescribeDataSourcesCommandOutput
>(MachineLearningClient, DescribeDataSourcesCommand, "NextToken", "NextToken", "Limit");
