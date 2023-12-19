// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListBundlesCommand, ListBundlesCommandInput, ListBundlesCommandOutput } from "../commands/ListBundlesCommand";
import { MobileClient } from "../MobileClient";
import { MobilePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBundles: (
  config: MobilePaginationConfiguration,
  input: ListBundlesCommandInput,
  ...rest: any[]
) => Paginator<ListBundlesCommandOutput> = createPaginator<
  MobilePaginationConfiguration,
  ListBundlesCommandInput,
  ListBundlesCommandOutput
>(MobileClient, ListBundlesCommand, "nextToken", "nextToken", "maxResults");
