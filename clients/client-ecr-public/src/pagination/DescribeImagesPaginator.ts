// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeImagesCommand,
  DescribeImagesCommandInput,
  DescribeImagesCommandOutput,
} from "../commands/DescribeImagesCommand";
import { ECRPUBLICClient } from "../ECRPUBLICClient";
import { ECRPUBLICPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeImages: (
  config: ECRPUBLICPaginationConfiguration,
  input: DescribeImagesCommandInput,
  ...rest: any[]
) => Paginator<DescribeImagesCommandOutput> = createPaginator<
  ECRPUBLICPaginationConfiguration,
  DescribeImagesCommandInput,
  DescribeImagesCommandOutput
>(ECRPUBLICClient, DescribeImagesCommand, "nextToken", "nextToken", "maxResults");
