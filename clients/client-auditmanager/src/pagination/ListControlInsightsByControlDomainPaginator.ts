// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AuditManagerClient } from "../AuditManagerClient";
import {
  ListControlInsightsByControlDomainCommand,
  ListControlInsightsByControlDomainCommandInput,
  ListControlInsightsByControlDomainCommandOutput,
} from "../commands/ListControlInsightsByControlDomainCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListControlInsightsByControlDomain: (
  config: AuditManagerPaginationConfiguration,
  input: ListControlInsightsByControlDomainCommandInput,
  ...rest: any[]
) => Paginator<ListControlInsightsByControlDomainCommandOutput> = createPaginator<
  AuditManagerPaginationConfiguration,
  ListControlInsightsByControlDomainCommandInput,
  ListControlInsightsByControlDomainCommandOutput
>(AuditManagerClient, ListControlInsightsByControlDomainCommand, "nextToken", "nextToken", "maxResults");
