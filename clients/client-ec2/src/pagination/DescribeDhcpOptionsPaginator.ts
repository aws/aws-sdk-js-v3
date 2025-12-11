// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDhcpOptionsCommand,
  DescribeDhcpOptionsCommandInput,
  DescribeDhcpOptionsCommandOutput,
} from "../commands/DescribeDhcpOptionsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDhcpOptions: (
  config: EC2PaginationConfiguration,
  input: DescribeDhcpOptionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDhcpOptionsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeDhcpOptionsCommandInput,
  DescribeDhcpOptionsCommandOutput
>(EC2Client, DescribeDhcpOptionsCommand, "NextToken", "NextToken", "MaxResults");
