// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTopicPartitionsCommand,
  DescribeTopicPartitionsCommandInput,
  DescribeTopicPartitionsCommandOutput,
} from "../commands/DescribeTopicPartitionsCommand";
import { KafkaClient } from "../KafkaClient";
import { KafkaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTopicPartitions: (
  config: KafkaPaginationConfiguration,
  input: DescribeTopicPartitionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeTopicPartitionsCommandOutput> = createPaginator<
  KafkaPaginationConfiguration,
  DescribeTopicPartitionsCommandInput,
  DescribeTopicPartitionsCommandOutput
>(KafkaClient, DescribeTopicPartitionsCommand, "NextToken", "NextToken", "MaxResults");
