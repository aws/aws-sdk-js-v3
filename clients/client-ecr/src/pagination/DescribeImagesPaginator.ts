// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeImagesCommand,
  DescribeImagesCommandInput,
  DescribeImagesCommandOutput,
} from "../commands/DescribeImagesCommand";
import { ECRClient } from "../ECRClient";
import { ECRPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeImages: (
  config: ECRPaginationConfiguration,
  input: DescribeImagesCommandInput,
  ...rest: any[]
) => Paginator<DescribeImagesCommandOutput> = createPaginator<
  ECRPaginationConfiguration,
  DescribeImagesCommandInput,
  DescribeImagesCommandOutput
>(ECRClient, DescribeImagesCommand, "nextToken", "nextToken", "maxResults");
