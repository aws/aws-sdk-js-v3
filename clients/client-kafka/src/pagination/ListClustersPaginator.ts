// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListClustersCommand,
  ListClustersCommandInput,
  ListClustersCommandOutput,
} from "../commands/ListClustersCommand";
import { KafkaClient } from "../KafkaClient";
import { KafkaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListClusters: (
  config: KafkaPaginationConfiguration,
  input: ListClustersCommandInput,
  ...rest: any[]
) => Paginator<ListClustersCommandOutput> = createPaginator<
  KafkaPaginationConfiguration,
  ListClustersCommandInput,
  ListClustersCommandOutput
>(KafkaClient, ListClustersCommand, "NextToken", "NextToken", "MaxResults");
