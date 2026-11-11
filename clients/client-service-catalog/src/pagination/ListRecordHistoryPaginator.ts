// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRecordHistoryCommand,
  ListRecordHistoryCommandInput,
  ListRecordHistoryCommandOutput,
} from "../commands/ListRecordHistoryCommand";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import type { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecordHistory: (
  config: ServiceCatalogPaginationConfiguration,
  input: ListRecordHistoryCommandInput,
  ...rest: any[]
) => Paginator<ListRecordHistoryCommandOutput> = createPaginator<
  ServiceCatalogPaginationConfiguration,
  ListRecordHistoryCommandInput,
  ListRecordHistoryCommandOutput
>(ServiceCatalogClient, ListRecordHistoryCommand, "PageToken", "NextPageToken", "PageSize");
