// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListThreatModelJobsCommand,
  ListThreatModelJobsCommandInput,
  ListThreatModelJobsCommandOutput,
} from "../commands/ListThreatModelJobsCommand";
import { SecurityAgentClient } from "../SecurityAgentClient";
import type { SecurityAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListThreatModelJobs: (
  config: SecurityAgentPaginationConfiguration,
  input: ListThreatModelJobsCommandInput,
  ...rest: any[]
) => Paginator<ListThreatModelJobsCommandOutput> = createPaginator<
  SecurityAgentPaginationConfiguration,
  ListThreatModelJobsCommandInput,
  ListThreatModelJobsCommandOutput
>(SecurityAgentClient, ListThreatModelJobsCommand, "nextToken", "nextToken", "maxResults");
