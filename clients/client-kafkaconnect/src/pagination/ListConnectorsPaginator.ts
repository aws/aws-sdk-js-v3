// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListConnectorsCommand,
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput,
} from "../commands/ListConnectorsCommand";
import { KafkaConnectClient } from "../KafkaConnectClient";
import { KafkaConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConnectors: (
  config: KafkaConnectPaginationConfiguration,
  input: ListConnectorsCommandInput,
  ...rest: any[]
) => Paginator<ListConnectorsCommandOutput> = createPaginator<
  KafkaConnectPaginationConfiguration,
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput
>(KafkaConnectClient, ListConnectorsCommand, "nextToken", "nextToken", "maxResults");
