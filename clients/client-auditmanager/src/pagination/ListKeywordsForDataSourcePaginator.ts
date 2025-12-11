// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AuditManagerClient } from "../AuditManagerClient";
import {
  ListKeywordsForDataSourceCommand,
  ListKeywordsForDataSourceCommandInput,
  ListKeywordsForDataSourceCommandOutput,
} from "../commands/ListKeywordsForDataSourceCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListKeywordsForDataSource: (
  config: AuditManagerPaginationConfiguration,
  input: ListKeywordsForDataSourceCommandInput,
  ...rest: any[]
) => Paginator<ListKeywordsForDataSourceCommandOutput> = createPaginator<
  AuditManagerPaginationConfiguration,
  ListKeywordsForDataSourceCommandInput,
  ListKeywordsForDataSourceCommandOutput
>(AuditManagerClient, ListKeywordsForDataSourceCommand, "nextToken", "nextToken", "maxResults");
