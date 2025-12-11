// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkerConfigurationsCommand,
  ListWorkerConfigurationsCommandInput,
  ListWorkerConfigurationsCommandOutput,
} from "../commands/ListWorkerConfigurationsCommand";
import { KafkaConnectClient } from "../KafkaConnectClient";
import { KafkaConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkerConfigurations: (
  config: KafkaConnectPaginationConfiguration,
  input: ListWorkerConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListWorkerConfigurationsCommandOutput> = createPaginator<
  KafkaConnectPaginationConfiguration,
  ListWorkerConfigurationsCommandInput,
  ListWorkerConfigurationsCommandOutput
>(KafkaConnectClient, ListWorkerConfigurationsCommand, "nextToken", "nextToken", "maxResults");
