// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListClusterOperationsCommand,
  ListClusterOperationsCommandInput,
  ListClusterOperationsCommandOutput,
} from "../commands/ListClusterOperationsCommand";
import { KafkaClient } from "../KafkaClient";
import { KafkaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListClusterOperations: (
  config: KafkaPaginationConfiguration,
  input: ListClusterOperationsCommandInput,
  ...rest: any[]
) => Paginator<ListClusterOperationsCommandOutput> = createPaginator<
  KafkaPaginationConfiguration,
  ListClusterOperationsCommandInput,
  ListClusterOperationsCommandOutput
>(KafkaClient, ListClusterOperationsCommand, "NextToken", "NextToken", "MaxResults");
