// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListTopicsCommand, ListTopicsCommandInput, ListTopicsCommandOutput } from "../commands/ListTopicsCommand";
import { KafkaClient } from "../KafkaClient";
import { KafkaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTopics: (
  config: KafkaPaginationConfiguration,
  input: ListTopicsCommandInput,
  ...rest: any[]
) => Paginator<ListTopicsCommandOutput> = createPaginator<
  KafkaPaginationConfiguration,
  ListTopicsCommandInput,
  ListTopicsCommandOutput
>(KafkaClient, ListTopicsCommand, "NextToken", "NextToken", "MaxResults");
