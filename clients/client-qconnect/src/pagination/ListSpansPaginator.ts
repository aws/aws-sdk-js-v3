// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListSpansCommand, ListSpansCommandInput, ListSpansCommandOutput } from "../commands/ListSpansCommand";
import { QConnectClient } from "../QConnectClient";
import { QConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSpans: (
  config: QConnectPaginationConfiguration,
  input: ListSpansCommandInput,
  ...rest: any[]
) => Paginator<ListSpansCommandOutput> = createPaginator<
  QConnectPaginationConfiguration,
  ListSpansCommandInput,
  ListSpansCommandOutput
>(QConnectClient, ListSpansCommand, "nextToken", "nextToken", "maxResults");
