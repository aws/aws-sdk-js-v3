// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListServiceActionsCommand,
  ListServiceActionsCommandInput,
  ListServiceActionsCommandOutput,
} from "../commands/ListServiceActionsCommand";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServiceActions: (
  config: ServiceCatalogPaginationConfiguration,
  input: ListServiceActionsCommandInput,
  ...rest: any[]
) => Paginator<ListServiceActionsCommandOutput> = createPaginator<
  ServiceCatalogPaginationConfiguration,
  ListServiceActionsCommandInput,
  ListServiceActionsCommandOutput
>(ServiceCatalogClient, ListServiceActionsCommand, "PageToken", "NextPageToken", "PageSize");
