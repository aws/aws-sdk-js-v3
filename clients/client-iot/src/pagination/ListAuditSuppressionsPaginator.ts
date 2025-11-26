// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAuditSuppressionsCommand,
  ListAuditSuppressionsCommandInput,
  ListAuditSuppressionsCommandOutput,
} from "../commands/ListAuditSuppressionsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAuditSuppressions: (
  config: IoTPaginationConfiguration,
  input: ListAuditSuppressionsCommandInput,
  ...rest: any[]
) => Paginator<ListAuditSuppressionsCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListAuditSuppressionsCommandInput,
  ListAuditSuppressionsCommandOutput
>(IoTClient, ListAuditSuppressionsCommand, "nextToken", "nextToken", "maxResults");
