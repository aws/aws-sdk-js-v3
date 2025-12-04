// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppFabricClient } from "../AppFabricClient";
import {
  ListAppBundlesCommand,
  ListAppBundlesCommandInput,
  ListAppBundlesCommandOutput,
} from "../commands/ListAppBundlesCommand";
import { AppFabricPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAppBundles: (
  config: AppFabricPaginationConfiguration,
  input: ListAppBundlesCommandInput,
  ...rest: any[]
) => Paginator<ListAppBundlesCommandOutput> = createPaginator<
  AppFabricPaginationConfiguration,
  ListAppBundlesCommandInput,
  ListAppBundlesCommandOutput
>(AppFabricClient, ListAppBundlesCommand, "nextToken", "nextToken", "maxResults");
