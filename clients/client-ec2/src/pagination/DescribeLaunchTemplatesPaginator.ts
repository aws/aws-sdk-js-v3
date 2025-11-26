// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeLaunchTemplatesCommand,
  DescribeLaunchTemplatesCommandInput,
  DescribeLaunchTemplatesCommandOutput,
} from "../commands/DescribeLaunchTemplatesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeLaunchTemplates: (
  config: EC2PaginationConfiguration,
  input: DescribeLaunchTemplatesCommandInput,
  ...rest: any[]
) => Paginator<DescribeLaunchTemplatesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeLaunchTemplatesCommandInput,
  DescribeLaunchTemplatesCommandOutput
>(EC2Client, DescribeLaunchTemplatesCommand, "NextToken", "NextToken", "MaxResults");
