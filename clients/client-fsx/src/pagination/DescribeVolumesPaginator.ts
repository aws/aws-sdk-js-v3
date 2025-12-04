// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeVolumesCommand,
  DescribeVolumesCommandInput,
  DescribeVolumesCommandOutput,
} from "../commands/DescribeVolumesCommand";
import { FSxClient } from "../FSxClient";
import { FSxPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeVolumes: (
  config: FSxPaginationConfiguration,
  input: DescribeVolumesCommandInput,
  ...rest: any[]
) => Paginator<DescribeVolumesCommandOutput> = createPaginator<
  FSxPaginationConfiguration,
  DescribeVolumesCommandInput,
  DescribeVolumesCommandOutput
>(FSxClient, DescribeVolumesCommand, "NextToken", "NextToken", "MaxResults");
