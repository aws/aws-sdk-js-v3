// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCustomPluginsCommand,
  ListCustomPluginsCommandInput,
  ListCustomPluginsCommandOutput,
} from "../commands/ListCustomPluginsCommand";
import { KafkaConnectClient } from "../KafkaConnectClient";
import { KafkaConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCustomPlugins: (
  config: KafkaConnectPaginationConfiguration,
  input: ListCustomPluginsCommandInput,
  ...rest: any[]
) => Paginator<ListCustomPluginsCommandOutput> = createPaginator<
  KafkaConnectPaginationConfiguration,
  ListCustomPluginsCommandInput,
  ListCustomPluginsCommandOutput
>(KafkaConnectClient, ListCustomPluginsCommand, "nextToken", "nextToken", "maxResults");
