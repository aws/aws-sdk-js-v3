// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChatbotClient } from "../ChatbotClient";
import {
  DescribeSlackChannelConfigurationsCommand,
  DescribeSlackChannelConfigurationsCommandInput,
  DescribeSlackChannelConfigurationsCommandOutput,
} from "../commands/DescribeSlackChannelConfigurationsCommand";
import { ChatbotPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSlackChannelConfigurations: (
  config: ChatbotPaginationConfiguration,
  input: DescribeSlackChannelConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeSlackChannelConfigurationsCommandOutput> = createPaginator<
  ChatbotPaginationConfiguration,
  DescribeSlackChannelConfigurationsCommandInput,
  DescribeSlackChannelConfigurationsCommandOutput
>(ChatbotClient, DescribeSlackChannelConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
