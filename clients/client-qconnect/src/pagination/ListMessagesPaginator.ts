// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMessagesCommand,
  ListMessagesCommandInput,
  ListMessagesCommandOutput,
} from "../commands/ListMessagesCommand";
import { QConnectClient } from "../QConnectClient";
import { QConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMessages: (
  config: QConnectPaginationConfiguration,
  input: ListMessagesCommandInput,
  ...rest: any[]
) => Paginator<ListMessagesCommandOutput> = createPaginator<
  QConnectPaginationConfiguration,
  ListMessagesCommandInput,
  ListMessagesCommandOutput
>(QConnectClient, ListMessagesCommand, "nextToken", "nextToken", "maxResults");
