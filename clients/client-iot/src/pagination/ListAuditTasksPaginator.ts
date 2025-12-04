// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAuditTasksCommand,
  ListAuditTasksCommandInput,
  ListAuditTasksCommandOutput,
} from "../commands/ListAuditTasksCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAuditTasks: (
  config: IoTPaginationConfiguration,
  input: ListAuditTasksCommandInput,
  ...rest: any[]
) => Paginator<ListAuditTasksCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListAuditTasksCommandInput,
  ListAuditTasksCommandOutput
>(IoTClient, ListAuditTasksCommand, "nextToken", "nextToken", "maxResults");
