// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListVpcConnectionsCommand,
  ListVpcConnectionsCommandInput,
  ListVpcConnectionsCommandOutput,
} from "../commands/ListVpcConnectionsCommand";
import { KafkaClient } from "../KafkaClient";
import { KafkaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVpcConnections: (
  config: KafkaPaginationConfiguration,
  input: ListVpcConnectionsCommandInput,
  ...rest: any[]
) => Paginator<ListVpcConnectionsCommandOutput> = createPaginator<
  KafkaPaginationConfiguration,
  ListVpcConnectionsCommandInput,
  ListVpcConnectionsCommandOutput
>(KafkaClient, ListVpcConnectionsCommand, "NextToken", "NextToken", "MaxResults");
