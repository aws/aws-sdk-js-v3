// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeLaunchTemplateVersionsCommand,
  DescribeLaunchTemplateVersionsCommandInput,
  DescribeLaunchTemplateVersionsCommandOutput,
} from "../commands/DescribeLaunchTemplateVersionsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeLaunchTemplateVersions: (
  config: EC2PaginationConfiguration,
  input: DescribeLaunchTemplateVersionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeLaunchTemplateVersionsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeLaunchTemplateVersionsCommandInput,
  DescribeLaunchTemplateVersionsCommandOutput
>(EC2Client, DescribeLaunchTemplateVersionsCommand, "NextToken", "NextToken", "MaxResults");
