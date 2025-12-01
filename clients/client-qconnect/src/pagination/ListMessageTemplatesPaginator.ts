// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMessageTemplatesCommand,
  ListMessageTemplatesCommandInput,
  ListMessageTemplatesCommandOutput,
} from "../commands/ListMessageTemplatesCommand";
import { QConnectClient } from "../QConnectClient";
import { QConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMessageTemplates: (
  config: QConnectPaginationConfiguration,
  input: ListMessageTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListMessageTemplatesCommandOutput> = createPaginator<
  QConnectPaginationConfiguration,
  ListMessageTemplatesCommandInput,
  ListMessageTemplatesCommandOutput
>(QConnectClient, ListMessageTemplatesCommand, "nextToken", "nextToken", "maxResults");
