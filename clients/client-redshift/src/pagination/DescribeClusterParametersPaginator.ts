// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeClusterParametersCommand,
  DescribeClusterParametersCommandInput,
  DescribeClusterParametersCommandOutput,
} from "../commands/DescribeClusterParametersCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeClusterParameters: (
  config: RedshiftPaginationConfiguration,
  input: DescribeClusterParametersCommandInput,
  ...rest: any[]
) => Paginator<DescribeClusterParametersCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeClusterParametersCommandInput,
  DescribeClusterParametersCommandOutput
>(RedshiftClient, DescribeClusterParametersCommand, "Marker", "Marker", "MaxRecords");
