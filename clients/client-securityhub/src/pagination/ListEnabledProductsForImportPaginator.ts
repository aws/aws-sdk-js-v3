// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEnabledProductsForImportCommand,
  ListEnabledProductsForImportCommandInput,
  ListEnabledProductsForImportCommandOutput,
} from "../commands/ListEnabledProductsForImportCommand";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEnabledProductsForImport: (
  config: SecurityHubPaginationConfiguration,
  input: ListEnabledProductsForImportCommandInput,
  ...rest: any[]
) => Paginator<ListEnabledProductsForImportCommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  ListEnabledProductsForImportCommandInput,
  ListEnabledProductsForImportCommandOutput
>(SecurityHubClient, ListEnabledProductsForImportCommand, "NextToken", "NextToken", "MaxResults");
