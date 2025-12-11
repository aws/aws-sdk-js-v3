// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetCaseAuditEventsCommand,
  GetCaseAuditEventsCommandInput,
  GetCaseAuditEventsCommandOutput,
} from "../commands/GetCaseAuditEventsCommand";
import { ConnectCasesClient } from "../ConnectCasesClient";
import { ConnectCasesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetCaseAuditEvents: (
  config: ConnectCasesPaginationConfiguration,
  input: GetCaseAuditEventsCommandInput,
  ...rest: any[]
) => Paginator<GetCaseAuditEventsCommandOutput> = createPaginator<
  ConnectCasesPaginationConfiguration,
  GetCaseAuditEventsCommandInput,
  GetCaseAuditEventsCommandOutput
>(ConnectCasesClient, GetCaseAuditEventsCommand, "nextToken", "nextToken", "maxResults");
