// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListPluginActionsCommand,
  ListPluginActionsCommandInput,
  ListPluginActionsCommandOutput,
} from "../commands/ListPluginActionsCommand";
import { QBusinessClient } from "../QBusinessClient";
import { QBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPluginActions: (
  config: QBusinessPaginationConfiguration,
  input: ListPluginActionsCommandInput,
  ...rest: any[]
) => Paginator<ListPluginActionsCommandOutput> = createPaginator<
  QBusinessPaginationConfiguration,
  ListPluginActionsCommandInput,
  ListPluginActionsCommandOutput
>(QBusinessClient, ListPluginActionsCommand, "nextToken", "nextToken", "maxResults");
