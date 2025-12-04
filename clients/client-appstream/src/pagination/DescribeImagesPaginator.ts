// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppStreamClient } from "../AppStreamClient";
import {
  DescribeImagesCommand,
  DescribeImagesCommandInput,
  DescribeImagesCommandOutput,
} from "../commands/DescribeImagesCommand";
import { AppStreamPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeImages: (
  config: AppStreamPaginationConfiguration,
  input: DescribeImagesCommandInput,
  ...rest: any[]
) => Paginator<DescribeImagesCommandOutput> = createPaginator<
  AppStreamPaginationConfiguration,
  DescribeImagesCommandInput,
  DescribeImagesCommandOutput
>(AppStreamClient, DescribeImagesCommand, "NextToken", "NextToken", "MaxResults");
