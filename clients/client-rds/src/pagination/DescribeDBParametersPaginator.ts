// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBParametersCommand,
  DescribeDBParametersCommandInput,
  DescribeDBParametersCommandOutput,
} from "../commands/DescribeDBParametersCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBParameters: (
  config: RDSPaginationConfiguration,
  input: DescribeDBParametersCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBParametersCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeDBParametersCommandInput,
  DescribeDBParametersCommandOutput
>(RDSClient, DescribeDBParametersCommand, "Marker", "Marker", "MaxRecords");
