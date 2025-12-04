// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTopicRuleDestinationsCommand,
  ListTopicRuleDestinationsCommandInput,
  ListTopicRuleDestinationsCommandOutput,
} from "../commands/ListTopicRuleDestinationsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTopicRuleDestinations: (
  config: IoTPaginationConfiguration,
  input: ListTopicRuleDestinationsCommandInput,
  ...rest: any[]
) => Paginator<ListTopicRuleDestinationsCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListTopicRuleDestinationsCommandInput,
  ListTopicRuleDestinationsCommandOutput
>(IoTClient, ListTopicRuleDestinationsCommand, "nextToken", "nextToken", "maxResults");
