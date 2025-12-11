// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssistantsCommand,
  ListAssistantsCommandInput,
  ListAssistantsCommandOutput,
} from "../commands/ListAssistantsCommand";
import { QConnectClient } from "../QConnectClient";
import { QConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssistants: (
  config: QConnectPaginationConfiguration,
  input: ListAssistantsCommandInput,
  ...rest: any[]
) => Paginator<ListAssistantsCommandOutput> = createPaginator<
  QConnectPaginationConfiguration,
  ListAssistantsCommandInput,
  ListAssistantsCommandOutput
>(QConnectClient, ListAssistantsCommand, "nextToken", "nextToken", "maxResults");
