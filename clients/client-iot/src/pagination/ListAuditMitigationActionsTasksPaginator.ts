// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAuditMitigationActionsTasksCommand,
  ListAuditMitigationActionsTasksCommandInput,
  ListAuditMitigationActionsTasksCommandOutput,
} from "../commands/ListAuditMitigationActionsTasksCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAuditMitigationActionsTasks: (
  config: IoTPaginationConfiguration,
  input: ListAuditMitigationActionsTasksCommandInput,
  ...rest: any[]
) => Paginator<ListAuditMitigationActionsTasksCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListAuditMitigationActionsTasksCommandInput,
  ListAuditMitigationActionsTasksCommandOutput
>(IoTClient, ListAuditMitigationActionsTasksCommand, "nextToken", "nextToken", "maxResults");
