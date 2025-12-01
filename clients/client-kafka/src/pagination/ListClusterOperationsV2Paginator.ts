// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListClusterOperationsV2Command,
  ListClusterOperationsV2CommandInput,
  ListClusterOperationsV2CommandOutput,
} from "../commands/ListClusterOperationsV2Command";
import { KafkaClient } from "../KafkaClient";
import { KafkaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListClusterOperationsV2: (
  config: KafkaPaginationConfiguration,
  input: ListClusterOperationsV2CommandInput,
  ...rest: any[]
) => Paginator<ListClusterOperationsV2CommandOutput> = createPaginator<
  KafkaPaginationConfiguration,
  ListClusterOperationsV2CommandInput,
  ListClusterOperationsV2CommandOutput
>(KafkaClient, ListClusterOperationsV2Command, "NextToken", "NextToken", "MaxResults");
