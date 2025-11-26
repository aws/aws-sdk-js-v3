// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AuditManagerClient } from "../AuditManagerClient";
import {
  ListControlDomainInsightsCommand,
  ListControlDomainInsightsCommandInput,
  ListControlDomainInsightsCommandOutput,
} from "../commands/ListControlDomainInsightsCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListControlDomainInsights: (
  config: AuditManagerPaginationConfiguration,
  input: ListControlDomainInsightsCommandInput,
  ...rest: any[]
) => Paginator<ListControlDomainInsightsCommandOutput> = createPaginator<
  AuditManagerPaginationConfiguration,
  ListControlDomainInsightsCommandInput,
  ListControlDomainInsightsCommandOutput
>(AuditManagerClient, ListControlDomainInsightsCommand, "nextToken", "nextToken", "maxResults");
