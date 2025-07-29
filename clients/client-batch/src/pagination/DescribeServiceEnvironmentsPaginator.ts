// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BatchClient } from "../BatchClient";
import {
  DescribeServiceEnvironmentsCommand,
  DescribeServiceEnvironmentsCommandInput,
  DescribeServiceEnvironmentsCommandOutput,
} from "../commands/DescribeServiceEnvironmentsCommand";
import { BatchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeServiceEnvironments: (
  config: BatchPaginationConfiguration,
  input: DescribeServiceEnvironmentsCommandInput,
  ...rest: any[]
) => Paginator<DescribeServiceEnvironmentsCommandOutput> = createPaginator<
  BatchPaginationConfiguration,
  DescribeServiceEnvironmentsCommandInput,
  DescribeServiceEnvironmentsCommandOutput
>(BatchClient, DescribeServiceEnvironmentsCommand, "nextToken", "nextToken", "maxResults");
