// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeFastLaunchImagesCommand,
  DescribeFastLaunchImagesCommandInput,
  DescribeFastLaunchImagesCommandOutput,
} from "../commands/DescribeFastLaunchImagesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeFastLaunchImages: (
  config: EC2PaginationConfiguration,
  input: DescribeFastLaunchImagesCommandInput,
  ...rest: any[]
) => Paginator<DescribeFastLaunchImagesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeFastLaunchImagesCommandInput,
  DescribeFastLaunchImagesCommandOutput
>(EC2Client, DescribeFastLaunchImagesCommand, "NextToken", "NextToken", "MaxResults");
