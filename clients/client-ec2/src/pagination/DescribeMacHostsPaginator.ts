// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeMacHostsCommand,
  DescribeMacHostsCommandInput,
  DescribeMacHostsCommandOutput,
} from "../commands/DescribeMacHostsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeMacHosts: (
  config: EC2PaginationConfiguration,
  input: DescribeMacHostsCommandInput,
  ...rest: any[]
) => Paginator<DescribeMacHostsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeMacHostsCommandInput,
  DescribeMacHostsCommandOutput
>(EC2Client, DescribeMacHostsCommand, "NextToken", "NextToken", "MaxResults");
