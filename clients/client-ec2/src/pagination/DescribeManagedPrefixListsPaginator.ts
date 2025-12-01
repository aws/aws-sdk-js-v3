// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeManagedPrefixListsCommand,
  DescribeManagedPrefixListsCommandInput,
  DescribeManagedPrefixListsCommandOutput,
} from "../commands/DescribeManagedPrefixListsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeManagedPrefixLists: (
  config: EC2PaginationConfiguration,
  input: DescribeManagedPrefixListsCommandInput,
  ...rest: any[]
) => Paginator<DescribeManagedPrefixListsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeManagedPrefixListsCommandInput,
  DescribeManagedPrefixListsCommandOutput
>(EC2Client, DescribeManagedPrefixListsCommand, "NextToken", "NextToken", "MaxResults");
