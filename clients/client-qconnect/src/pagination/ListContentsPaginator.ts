// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListContentsCommand,
  ListContentsCommandInput,
  ListContentsCommandOutput,
} from "../commands/ListContentsCommand";
import { QConnectClient } from "../QConnectClient";
import { QConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContents: (
  config: QConnectPaginationConfiguration,
  input: ListContentsCommandInput,
  ...rest: any[]
) => Paginator<ListContentsCommandOutput> = createPaginator<
  QConnectPaginationConfiguration,
  ListContentsCommandInput,
  ListContentsCommandOutput
>(QConnectClient, ListContentsCommand, "nextToken", "nextToken", "maxResults");
