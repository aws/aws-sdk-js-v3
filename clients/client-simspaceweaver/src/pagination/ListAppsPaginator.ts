// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListAppsCommand, ListAppsCommandInput, ListAppsCommandOutput } from "../commands/ListAppsCommand";
import { SimSpaceWeaverClient } from "../SimSpaceWeaverClient";
import { SimSpaceWeaverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApps: (
  config: SimSpaceWeaverPaginationConfiguration,
  input: ListAppsCommandInput,
  ...rest: any[]
) => Paginator<ListAppsCommandOutput> = createPaginator<
  SimSpaceWeaverPaginationConfiguration,
  ListAppsCommandInput,
  ListAppsCommandOutput
>(SimSpaceWeaverClient, ListAppsCommand, "NextToken", "NextToken", "MaxResults");
