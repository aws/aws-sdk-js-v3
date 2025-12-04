// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribePrefixListsCommand,
  DescribePrefixListsCommandInput,
  DescribePrefixListsCommandOutput,
} from "../commands/DescribePrefixListsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribePrefixLists: (
  config: EC2PaginationConfiguration,
  input: DescribePrefixListsCommandInput,
  ...rest: any[]
) => Paginator<DescribePrefixListsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribePrefixListsCommandInput,
  DescribePrefixListsCommandOutput
>(EC2Client, DescribePrefixListsCommand, "NextToken", "NextToken", "MaxResults");
