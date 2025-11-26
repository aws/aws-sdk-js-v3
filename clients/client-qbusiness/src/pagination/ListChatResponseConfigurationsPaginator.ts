// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListChatResponseConfigurationsCommand,
  ListChatResponseConfigurationsCommandInput,
  ListChatResponseConfigurationsCommandOutput,
} from "../commands/ListChatResponseConfigurationsCommand";
import { QBusinessClient } from "../QBusinessClient";
import { QBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChatResponseConfigurations: (
  config: QBusinessPaginationConfiguration,
  input: ListChatResponseConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListChatResponseConfigurationsCommandOutput> = createPaginator<
  QBusinessPaginationConfiguration,
  ListChatResponseConfigurationsCommandInput,
  ListChatResponseConfigurationsCommandOutput
>(QBusinessClient, ListChatResponseConfigurationsCommand, "nextToken", "nextToken", "maxResults");
