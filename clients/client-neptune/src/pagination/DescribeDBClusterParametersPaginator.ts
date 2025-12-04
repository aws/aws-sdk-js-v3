// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBClusterParametersCommand,
  DescribeDBClusterParametersCommandInput,
  DescribeDBClusterParametersCommandOutput,
} from "../commands/DescribeDBClusterParametersCommand";
import { NeptuneClient } from "../NeptuneClient";
import { NeptunePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBClusterParameters: (
  config: NeptunePaginationConfiguration,
  input: DescribeDBClusterParametersCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBClusterParametersCommandOutput> = createPaginator<
  NeptunePaginationConfiguration,
  DescribeDBClusterParametersCommandInput,
  DescribeDBClusterParametersCommandOutput
>(NeptuneClient, DescribeDBClusterParametersCommand, "Marker", "Marker", "MaxRecords");
