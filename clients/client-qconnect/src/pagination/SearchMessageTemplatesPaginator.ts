// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  SearchMessageTemplatesCommand,
  SearchMessageTemplatesCommandInput,
  SearchMessageTemplatesCommandOutput,
} from "../commands/SearchMessageTemplatesCommand";
import { QConnectClient } from "../QConnectClient";
import { QConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchMessageTemplates: (
  config: QConnectPaginationConfiguration,
  input: SearchMessageTemplatesCommandInput,
  ...rest: any[]
) => Paginator<SearchMessageTemplatesCommandOutput> = createPaginator<
  QConnectPaginationConfiguration,
  SearchMessageTemplatesCommandInput,
  SearchMessageTemplatesCommandOutput
>(QConnectClient, SearchMessageTemplatesCommand, "nextToken", "nextToken", "maxResults");
