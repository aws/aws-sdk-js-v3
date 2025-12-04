// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPluginTypeMetadataCommand,
  ListPluginTypeMetadataCommandInput,
  ListPluginTypeMetadataCommandOutput,
} from "../commands/ListPluginTypeMetadataCommand";
import { QBusinessClient } from "../QBusinessClient";
import { QBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPluginTypeMetadata: (
  config: QBusinessPaginationConfiguration,
  input: ListPluginTypeMetadataCommandInput,
  ...rest: any[]
) => Paginator<ListPluginTypeMetadataCommandOutput> = createPaginator<
  QBusinessPaginationConfiguration,
  ListPluginTypeMetadataCommandInput,
  ListPluginTypeMetadataCommandOutput
>(QBusinessClient, ListPluginTypeMetadataCommand, "nextToken", "nextToken", "maxResults");
