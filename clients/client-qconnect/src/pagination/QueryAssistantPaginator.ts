// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  QueryAssistantCommand,
  QueryAssistantCommandInput,
  QueryAssistantCommandOutput,
} from "../commands/QueryAssistantCommand";
import { QConnectClient } from "../QConnectClient";
import { QConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateQueryAssistant: (
  config: QConnectPaginationConfiguration,
  input: QueryAssistantCommandInput,
  ...rest: any[]
) => Paginator<QueryAssistantCommandOutput> = createPaginator<
  QConnectPaginationConfiguration,
  QueryAssistantCommandInput,
  QueryAssistantCommandOutput
>(QConnectClient, QueryAssistantCommand, "nextToken", "nextToken", "maxResults");
