// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListThreatsCommand, ListThreatsCommandInput, ListThreatsCommandOutput } from "../commands/ListThreatsCommand";
import { SecurityAgentClient } from "../SecurityAgentClient";
import type { SecurityAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListThreats: (
  config: SecurityAgentPaginationConfiguration,
  input: ListThreatsCommandInput,
  ...rest: any[]
) => Paginator<ListThreatsCommandOutput> = createPaginator<
  SecurityAgentPaginationConfiguration,
  ListThreatsCommandInput,
  ListThreatsCommandOutput
>(SecurityAgentClient, ListThreatsCommand, "nextToken", "nextToken", "maxResults");
