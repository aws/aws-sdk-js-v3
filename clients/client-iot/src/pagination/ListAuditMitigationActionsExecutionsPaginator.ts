// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAuditMitigationActionsExecutionsCommand,
  ListAuditMitigationActionsExecutionsCommandInput,
  ListAuditMitigationActionsExecutionsCommandOutput,
} from "../commands/ListAuditMitigationActionsExecutionsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAuditMitigationActionsExecutions: (
  config: IoTPaginationConfiguration,
  input: ListAuditMitigationActionsExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListAuditMitigationActionsExecutionsCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListAuditMitigationActionsExecutionsCommandInput,
  ListAuditMitigationActionsExecutionsCommandOutput
>(IoTClient, ListAuditMitigationActionsExecutionsCommand, "nextToken", "nextToken", "maxResults");
