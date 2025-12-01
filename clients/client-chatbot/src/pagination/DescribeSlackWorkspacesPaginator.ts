// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChatbotClient } from "../ChatbotClient";
import {
  DescribeSlackWorkspacesCommand,
  DescribeSlackWorkspacesCommandInput,
  DescribeSlackWorkspacesCommandOutput,
} from "../commands/DescribeSlackWorkspacesCommand";
import { ChatbotPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSlackWorkspaces: (
  config: ChatbotPaginationConfiguration,
  input: DescribeSlackWorkspacesCommandInput,
  ...rest: any[]
) => Paginator<DescribeSlackWorkspacesCommandOutput> = createPaginator<
  ChatbotPaginationConfiguration,
  DescribeSlackWorkspacesCommandInput,
  DescribeSlackWorkspacesCommandOutput
>(ChatbotClient, DescribeSlackWorkspacesCommand, "NextToken", "NextToken", "MaxResults");
