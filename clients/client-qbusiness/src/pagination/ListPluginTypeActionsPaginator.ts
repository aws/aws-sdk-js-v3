// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListPluginTypeActionsCommand,
  ListPluginTypeActionsCommandInput,
  ListPluginTypeActionsCommandOutput,
} from "../commands/ListPluginTypeActionsCommand";
import { QBusinessClient } from "../QBusinessClient";
import { QBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPluginTypeActions: (
  config: QBusinessPaginationConfiguration,
  input: ListPluginTypeActionsCommandInput,
  ...rest: any[]
) => Paginator<ListPluginTypeActionsCommandOutput> = createPaginator<
  QBusinessPaginationConfiguration,
  ListPluginTypeActionsCommandInput,
  ListPluginTypeActionsCommandOutput
>(QBusinessClient, ListPluginTypeActionsCommand, "nextToken", "nextToken", "maxResults");
