// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppStreamClient } from "../AppStreamClient";
import {
  DescribeImagePermissionsCommand,
  DescribeImagePermissionsCommandInput,
  DescribeImagePermissionsCommandOutput,
} from "../commands/DescribeImagePermissionsCommand";
import { AppStreamPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeImagePermissions: (
  config: AppStreamPaginationConfiguration,
  input: DescribeImagePermissionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeImagePermissionsCommandOutput> = createPaginator<
  AppStreamPaginationConfiguration,
  DescribeImagePermissionsCommandInput,
  DescribeImagePermissionsCommandOutput
>(AppStreamClient, DescribeImagePermissionsCommand, "NextToken", "NextToken", "MaxResults");
