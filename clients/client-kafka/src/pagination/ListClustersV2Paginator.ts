// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListClustersV2Command,
  ListClustersV2CommandInput,
  ListClustersV2CommandOutput,
} from "../commands/ListClustersV2Command";
import { KafkaClient } from "../KafkaClient";
import { KafkaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListClustersV2: (
  config: KafkaPaginationConfiguration,
  input: ListClustersV2CommandInput,
  ...rest: any[]
) => Paginator<ListClustersV2CommandOutput> = createPaginator<
  KafkaPaginationConfiguration,
  ListClustersV2CommandInput,
  ListClustersV2CommandOutput
>(KafkaClient, ListClustersV2Command, "NextToken", "NextToken", "MaxResults");
