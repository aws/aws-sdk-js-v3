// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChatbotClient } from "../ChatbotClient";
import {
  DescribeSlackUserIdentitiesCommand,
  DescribeSlackUserIdentitiesCommandInput,
  DescribeSlackUserIdentitiesCommandOutput,
} from "../commands/DescribeSlackUserIdentitiesCommand";
import { ChatbotPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSlackUserIdentities: (
  config: ChatbotPaginationConfiguration,
  input: DescribeSlackUserIdentitiesCommandInput,
  ...rest: any[]
) => Paginator<DescribeSlackUserIdentitiesCommandOutput> = createPaginator<
  ChatbotPaginationConfiguration,
  DescribeSlackUserIdentitiesCommandInput,
  DescribeSlackUserIdentitiesCommandOutput
>(ChatbotClient, DescribeSlackUserIdentitiesCommand, "NextToken", "NextToken", "MaxResults");
