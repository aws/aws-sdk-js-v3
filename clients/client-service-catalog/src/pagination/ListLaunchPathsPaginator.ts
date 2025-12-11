// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLaunchPathsCommand,
  ListLaunchPathsCommandInput,
  ListLaunchPathsCommandOutput,
} from "../commands/ListLaunchPathsCommand";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLaunchPaths: (
  config: ServiceCatalogPaginationConfiguration,
  input: ListLaunchPathsCommandInput,
  ...rest: any[]
) => Paginator<ListLaunchPathsCommandOutput> = createPaginator<
  ServiceCatalogPaginationConfiguration,
  ListLaunchPathsCommandInput,
  ListLaunchPathsCommandOutput
>(ServiceCatalogClient, ListLaunchPathsCommand, "PageToken", "NextPageToken", "PageSize");
