// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetSecurityGroupsForVpcCommand,
  GetSecurityGroupsForVpcCommandInput,
  GetSecurityGroupsForVpcCommandOutput,
} from "../commands/GetSecurityGroupsForVpcCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetSecurityGroupsForVpc: (
  config: EC2PaginationConfiguration,
  input: GetSecurityGroupsForVpcCommandInput,
  ...rest: any[]
) => Paginator<GetSecurityGroupsForVpcCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetSecurityGroupsForVpcCommandInput,
  GetSecurityGroupsForVpcCommandOutput
>(EC2Client, GetSecurityGroupsForVpcCommand, "NextToken", "NextToken", "MaxResults");
