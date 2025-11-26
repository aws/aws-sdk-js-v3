// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSubscriptionsByTopicCommand,
  ListSubscriptionsByTopicCommandInput,
  ListSubscriptionsByTopicCommandOutput,
} from "../commands/ListSubscriptionsByTopicCommand";
import { SNSClient } from "../SNSClient";
import { SNSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSubscriptionsByTopic: (
  config: SNSPaginationConfiguration,
  input: ListSubscriptionsByTopicCommandInput,
  ...rest: any[]
) => Paginator<ListSubscriptionsByTopicCommandOutput> = createPaginator<
  SNSPaginationConfiguration,
  ListSubscriptionsByTopicCommandInput,
  ListSubscriptionsByTopicCommandOutput
>(SNSClient, ListSubscriptionsByTopicCommand, "NextToken", "NextToken", "");
