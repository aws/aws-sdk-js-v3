// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAgentGoalsCommand,
  ListAgentGoalsCommandInput,
  ListAgentGoalsCommandOutput,
} from "../commands/ListAgentGoalsCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import type { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAgentGoals: (
  config: WellArchitectedPaginationConfiguration,
  input: ListAgentGoalsCommandInput,
  ...rest: any[]
) => Paginator<ListAgentGoalsCommandOutput> = createPaginator<
  WellArchitectedPaginationConfiguration,
  ListAgentGoalsCommandInput,
  ListAgentGoalsCommandOutput
>(WellArchitectedClient, ListAgentGoalsCommand, "nextToken", "nextToken", "maxResults");
