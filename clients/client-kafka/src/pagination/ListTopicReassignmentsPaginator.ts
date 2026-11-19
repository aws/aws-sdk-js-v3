// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTopicReassignmentsCommand,
  ListTopicReassignmentsCommandInput,
  ListTopicReassignmentsCommandOutput,
} from "../commands/ListTopicReassignmentsCommand";
import { KafkaClient } from "../KafkaClient";
import type { KafkaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTopicReassignments: (
  config: KafkaPaginationConfiguration,
  input: ListTopicReassignmentsCommandInput,
  ...rest: any[]
) => Paginator<ListTopicReassignmentsCommandOutput> = createPaginator<
  KafkaPaginationConfiguration,
  ListTopicReassignmentsCommandInput,
  ListTopicReassignmentsCommandOutput
>(KafkaClient, ListTopicReassignmentsCommand, "NextToken", "NextToken", "MaxResults");
