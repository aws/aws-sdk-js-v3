// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeFileCachesCommand,
  DescribeFileCachesCommandInput,
  DescribeFileCachesCommandOutput,
} from "../commands/DescribeFileCachesCommand";
import { FSxClient } from "../FSxClient";
import { FSxPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeFileCaches: (
  config: FSxPaginationConfiguration,
  input: DescribeFileCachesCommandInput,
  ...rest: any[]
) => Paginator<DescribeFileCachesCommandOutput> = createPaginator<
  FSxPaginationConfiguration,
  DescribeFileCachesCommandInput,
  DescribeFileCachesCommandOutput
>(FSxClient, DescribeFileCachesCommand, "NextToken", "NextToken", "MaxResults");
