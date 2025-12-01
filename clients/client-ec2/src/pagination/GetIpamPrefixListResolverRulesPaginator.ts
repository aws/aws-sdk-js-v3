// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetIpamPrefixListResolverRulesCommand,
  GetIpamPrefixListResolverRulesCommandInput,
  GetIpamPrefixListResolverRulesCommandOutput,
} from "../commands/GetIpamPrefixListResolverRulesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetIpamPrefixListResolverRules: (
  config: EC2PaginationConfiguration,
  input: GetIpamPrefixListResolverRulesCommandInput,
  ...rest: any[]
) => Paginator<GetIpamPrefixListResolverRulesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetIpamPrefixListResolverRulesCommandInput,
  GetIpamPrefixListResolverRulesCommandOutput
>(EC2Client, GetIpamPrefixListResolverRulesCommand, "NextToken", "NextToken", "MaxResults");
