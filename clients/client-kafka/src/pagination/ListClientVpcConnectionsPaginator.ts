// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListClientVpcConnectionsCommand,
  ListClientVpcConnectionsCommandInput,
  ListClientVpcConnectionsCommandOutput,
} from "../commands/ListClientVpcConnectionsCommand";
import { KafkaClient } from "../KafkaClient";
import { KafkaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListClientVpcConnections: (
  config: KafkaPaginationConfiguration,
  input: ListClientVpcConnectionsCommandInput,
  ...rest: any[]
) => Paginator<ListClientVpcConnectionsCommandOutput> = createPaginator<
  KafkaPaginationConfiguration,
  ListClientVpcConnectionsCommandInput,
  ListClientVpcConnectionsCommandOutput
>(KafkaClient, ListClientVpcConnectionsCommand, "NextToken", "NextToken", "MaxResults");
