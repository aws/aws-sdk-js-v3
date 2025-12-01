// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  QueryAssistantCommand,
  QueryAssistantCommandInput,
  QueryAssistantCommandOutput,
} from "../commands/QueryAssistantCommand";
import { WisdomClient } from "../WisdomClient";
import { WisdomPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateQueryAssistant: (
  config: WisdomPaginationConfiguration,
  input: QueryAssistantCommandInput,
  ...rest: any[]
) => Paginator<QueryAssistantCommandOutput> = createPaginator<
  WisdomPaginationConfiguration,
  QueryAssistantCommandInput,
  QueryAssistantCommandOutput
>(WisdomClient, QueryAssistantCommand, "nextToken", "nextToken", "maxResults");
