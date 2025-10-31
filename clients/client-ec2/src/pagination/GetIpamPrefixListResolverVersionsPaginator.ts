// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  GetIpamPrefixListResolverVersionsCommand,
  GetIpamPrefixListResolverVersionsCommandInput,
  GetIpamPrefixListResolverVersionsCommandOutput,
} from "../commands/GetIpamPrefixListResolverVersionsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetIpamPrefixListResolverVersions: (
  config: EC2PaginationConfiguration,
  input: GetIpamPrefixListResolverVersionsCommandInput,
  ...rest: any[]
) => Paginator<GetIpamPrefixListResolverVersionsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetIpamPrefixListResolverVersionsCommandInput,
  GetIpamPrefixListResolverVersionsCommandOutput
>(EC2Client, GetIpamPrefixListResolverVersionsCommand, "NextToken", "NextToken", "MaxResults");
