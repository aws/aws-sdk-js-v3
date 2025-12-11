// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListNodesCommand, ListNodesCommandInput, ListNodesCommandOutput } from "../commands/ListNodesCommand";
import { KafkaClient } from "../KafkaClient";
import { KafkaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNodes: (
  config: KafkaPaginationConfiguration,
  input: ListNodesCommandInput,
  ...rest: any[]
) => Paginator<ListNodesCommandOutput> = createPaginator<
  KafkaPaginationConfiguration,
  ListNodesCommandInput,
  ListNodesCommandOutput
>(KafkaClient, ListNodesCommand, "NextToken", "NextToken", "MaxResults");
