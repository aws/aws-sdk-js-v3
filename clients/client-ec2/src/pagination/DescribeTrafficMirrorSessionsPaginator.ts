// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTrafficMirrorSessionsCommand,
  DescribeTrafficMirrorSessionsCommandInput,
  DescribeTrafficMirrorSessionsCommandOutput,
} from "../commands/DescribeTrafficMirrorSessionsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTrafficMirrorSessions: (
  config: EC2PaginationConfiguration,
  input: DescribeTrafficMirrorSessionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeTrafficMirrorSessionsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeTrafficMirrorSessionsCommandInput,
  DescribeTrafficMirrorSessionsCommandOutput
>(EC2Client, DescribeTrafficMirrorSessionsCommand, "NextToken", "NextToken", "MaxResults");
