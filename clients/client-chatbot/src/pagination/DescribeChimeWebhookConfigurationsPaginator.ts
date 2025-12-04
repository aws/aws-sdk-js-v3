// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChatbotClient } from "../ChatbotClient";
import {
  DescribeChimeWebhookConfigurationsCommand,
  DescribeChimeWebhookConfigurationsCommandInput,
  DescribeChimeWebhookConfigurationsCommandOutput,
} from "../commands/DescribeChimeWebhookConfigurationsCommand";
import { ChatbotPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeChimeWebhookConfigurations: (
  config: ChatbotPaginationConfiguration,
  input: DescribeChimeWebhookConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeChimeWebhookConfigurationsCommandOutput> = createPaginator<
  ChatbotPaginationConfiguration,
  DescribeChimeWebhookConfigurationsCommandInput,
  DescribeChimeWebhookConfigurationsCommandOutput
>(ChatbotClient, DescribeChimeWebhookConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
