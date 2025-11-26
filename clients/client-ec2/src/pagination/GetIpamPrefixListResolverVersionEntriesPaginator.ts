// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetIpamPrefixListResolverVersionEntriesCommand,
  GetIpamPrefixListResolverVersionEntriesCommandInput,
  GetIpamPrefixListResolverVersionEntriesCommandOutput,
} from "../commands/GetIpamPrefixListResolverVersionEntriesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetIpamPrefixListResolverVersionEntries: (
  config: EC2PaginationConfiguration,
  input: GetIpamPrefixListResolverVersionEntriesCommandInput,
  ...rest: any[]
) => Paginator<GetIpamPrefixListResolverVersionEntriesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetIpamPrefixListResolverVersionEntriesCommandInput,
  GetIpamPrefixListResolverVersionEntriesCommandOutput
>(EC2Client, GetIpamPrefixListResolverVersionEntriesCommand, "NextToken", "NextToken", "MaxResults");
