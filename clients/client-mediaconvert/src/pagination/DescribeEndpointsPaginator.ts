// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeEndpointsCommand,
  DescribeEndpointsCommandInput,
  DescribeEndpointsCommandOutput,
} from "../commands/DescribeEndpointsCommand";
import { MediaConvertClient } from "../MediaConvertClient";
import { MediaConvertPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEndpoints: (
  config: MediaConvertPaginationConfiguration,
  input: DescribeEndpointsCommandInput,
  ...rest: any[]
) => Paginator<DescribeEndpointsCommandOutput> = createPaginator<
  MediaConvertPaginationConfiguration,
  DescribeEndpointsCommandInput,
  DescribeEndpointsCommandOutput
>(MediaConvertClient, DescribeEndpointsCommand, "NextToken", "NextToken", "MaxResults");
