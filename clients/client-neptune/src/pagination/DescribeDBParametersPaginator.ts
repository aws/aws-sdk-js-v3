// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBParametersCommand,
  DescribeDBParametersCommandInput,
  DescribeDBParametersCommandOutput,
} from "../commands/DescribeDBParametersCommand";
import { NeptuneClient } from "../NeptuneClient";
import { NeptunePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBParameters: (
  config: NeptunePaginationConfiguration,
  input: DescribeDBParametersCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBParametersCommandOutput> = createPaginator<
  NeptunePaginationConfiguration,
  DescribeDBParametersCommandInput,
  DescribeDBParametersCommandOutput
>(NeptuneClient, DescribeDBParametersCommand, "Marker", "Marker", "MaxRecords");
