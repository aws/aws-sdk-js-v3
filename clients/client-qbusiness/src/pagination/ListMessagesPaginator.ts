// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMessagesCommand,
  ListMessagesCommandInput,
  ListMessagesCommandOutput,
} from "../commands/ListMessagesCommand";
import { QBusinessClient } from "../QBusinessClient";
import { QBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMessages: (
  config: QBusinessPaginationConfiguration,
  input: ListMessagesCommandInput,
  ...rest: any[]
) => Paginator<ListMessagesCommandOutput> = createPaginator<
  QBusinessPaginationConfiguration,
  ListMessagesCommandInput,
  ListMessagesCommandOutput
>(QBusinessClient, ListMessagesCommand, "nextToken", "nextToken", "maxResults");
