// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTableCommand,
  DescribeTableCommandInput,
  DescribeTableCommandOutput,
} from "../commands/DescribeTableCommand";
import { RedshiftDataClient } from "../RedshiftDataClient";
import { RedshiftDataPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTable: (
  config: RedshiftDataPaginationConfiguration,
  input: DescribeTableCommandInput,
  ...rest: any[]
) => Paginator<DescribeTableCommandOutput> = createPaginator<
  RedshiftDataPaginationConfiguration,
  DescribeTableCommandInput,
  DescribeTableCommandOutput
>(RedshiftDataClient, DescribeTableCommand, "NextToken", "NextToken", "MaxResults");
