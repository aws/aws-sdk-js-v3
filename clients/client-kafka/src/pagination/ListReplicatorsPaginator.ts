// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListReplicatorsCommand,
  ListReplicatorsCommandInput,
  ListReplicatorsCommandOutput,
} from "../commands/ListReplicatorsCommand";
import { KafkaClient } from "../KafkaClient";
import { KafkaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReplicators: (
  config: KafkaPaginationConfiguration,
  input: ListReplicatorsCommandInput,
  ...rest: any[]
) => Paginator<ListReplicatorsCommandOutput> = createPaginator<
  KafkaPaginationConfiguration,
  ListReplicatorsCommandInput,
  ListReplicatorsCommandOutput
>(KafkaClient, ListReplicatorsCommand, "NextToken", "NextToken", "MaxResults");
