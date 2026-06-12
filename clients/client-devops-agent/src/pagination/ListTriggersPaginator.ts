// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTriggersCommand,
  ListTriggersCommandInput,
  ListTriggersCommandOutput,
} from "../commands/ListTriggersCommand";
import { DevOpsAgentClient } from "../DevOpsAgentClient";
import type { DevOpsAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTriggers: (
  config: DevOpsAgentPaginationConfiguration,
  input: ListTriggersCommandInput,
  ...rest: any[]
) => Paginator<ListTriggersCommandOutput> = createPaginator<
  DevOpsAgentPaginationConfiguration,
  ListTriggersCommandInput,
  ListTriggersCommandOutput
>(DevOpsAgentClient, ListTriggersCommand, "nextToken", "nextToken", "maxResults");
