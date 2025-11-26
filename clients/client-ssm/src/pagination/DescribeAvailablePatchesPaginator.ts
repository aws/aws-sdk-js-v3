// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeAvailablePatchesCommand,
  DescribeAvailablePatchesCommandInput,
  DescribeAvailablePatchesCommandOutput,
} from "../commands/DescribeAvailablePatchesCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAvailablePatches: (
  config: SSMPaginationConfiguration,
  input: DescribeAvailablePatchesCommandInput,
  ...rest: any[]
) => Paginator<DescribeAvailablePatchesCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  DescribeAvailablePatchesCommandInput,
  DescribeAvailablePatchesCommandOutput
>(SSMClient, DescribeAvailablePatchesCommand, "NextToken", "NextToken", "MaxResults");
