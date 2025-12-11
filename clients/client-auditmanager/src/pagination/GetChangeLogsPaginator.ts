// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AuditManagerClient } from "../AuditManagerClient";
import {
  GetChangeLogsCommand,
  GetChangeLogsCommandInput,
  GetChangeLogsCommandOutput,
} from "../commands/GetChangeLogsCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetChangeLogs: (
  config: AuditManagerPaginationConfiguration,
  input: GetChangeLogsCommandInput,
  ...rest: any[]
) => Paginator<GetChangeLogsCommandOutput> = createPaginator<
  AuditManagerPaginationConfiguration,
  GetChangeLogsCommandInput,
  GetChangeLogsCommandOutput
>(AuditManagerClient, GetChangeLogsCommand, "nextToken", "nextToken", "maxResults");
