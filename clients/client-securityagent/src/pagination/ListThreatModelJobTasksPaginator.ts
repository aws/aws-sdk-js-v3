// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListThreatModelJobTasksCommand,
  ListThreatModelJobTasksCommandInput,
  ListThreatModelJobTasksCommandOutput,
} from "../commands/ListThreatModelJobTasksCommand";
import { SecurityAgentClient } from "../SecurityAgentClient";
import type { SecurityAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListThreatModelJobTasks: (
  config: SecurityAgentPaginationConfiguration,
  input: ListThreatModelJobTasksCommandInput,
  ...rest: any[]
) => Paginator<ListThreatModelJobTasksCommandOutput> = createPaginator<
  SecurityAgentPaginationConfiguration,
  ListThreatModelJobTasksCommandInput,
  ListThreatModelJobTasksCommandOutput
>(SecurityAgentClient, ListThreatModelJobTasksCommand, "nextToken", "nextToken", "maxResults");
