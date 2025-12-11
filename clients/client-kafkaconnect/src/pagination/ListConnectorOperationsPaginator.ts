// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListConnectorOperationsCommand,
  ListConnectorOperationsCommandInput,
  ListConnectorOperationsCommandOutput,
} from "../commands/ListConnectorOperationsCommand";
import { KafkaConnectClient } from "../KafkaConnectClient";
import { KafkaConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConnectorOperations: (
  config: KafkaConnectPaginationConfiguration,
  input: ListConnectorOperationsCommandInput,
  ...rest: any[]
) => Paginator<ListConnectorOperationsCommandOutput> = createPaginator<
  KafkaConnectPaginationConfiguration,
  ListConnectorOperationsCommandInput,
  ListConnectorOperationsCommandOutput
>(KafkaConnectClient, ListConnectorOperationsCommand, "nextToken", "nextToken", "maxResults");
