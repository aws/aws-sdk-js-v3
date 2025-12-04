// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTopicRulesCommand,
  ListTopicRulesCommandInput,
  ListTopicRulesCommandOutput,
} from "../commands/ListTopicRulesCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTopicRules: (
  config: IoTPaginationConfiguration,
  input: ListTopicRulesCommandInput,
  ...rest: any[]
) => Paginator<ListTopicRulesCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListTopicRulesCommandInput,
  ListTopicRulesCommandOutput
>(IoTClient, ListTopicRulesCommand, "nextToken", "nextToken", "maxResults");
