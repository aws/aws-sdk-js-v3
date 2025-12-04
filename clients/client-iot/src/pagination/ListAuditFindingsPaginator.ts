// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAuditFindingsCommand,
  ListAuditFindingsCommandInput,
  ListAuditFindingsCommandOutput,
} from "../commands/ListAuditFindingsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAuditFindings: (
  config: IoTPaginationConfiguration,
  input: ListAuditFindingsCommandInput,
  ...rest: any[]
) => Paginator<ListAuditFindingsCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListAuditFindingsCommandInput,
  ListAuditFindingsCommandOutput
>(IoTClient, ListAuditFindingsCommand, "nextToken", "nextToken", "maxResults");
