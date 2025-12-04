// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBClusterParametersCommand,
  DescribeDBClusterParametersCommandInput,
  DescribeDBClusterParametersCommandOutput,
} from "../commands/DescribeDBClusterParametersCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBClusterParameters: (
  config: RDSPaginationConfiguration,
  input: DescribeDBClusterParametersCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBClusterParametersCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeDBClusterParametersCommandInput,
  DescribeDBClusterParametersCommandOutput
>(RDSClient, DescribeDBClusterParametersCommand, "Marker", "Marker", "MaxRecords");
