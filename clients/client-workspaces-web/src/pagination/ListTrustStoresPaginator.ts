// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTrustStoresCommand,
  ListTrustStoresCommandInput,
  ListTrustStoresCommandOutput,
} from "../commands/ListTrustStoresCommand";
import { WorkSpacesWebClient } from "../WorkSpacesWebClient";
import { WorkSpacesWebPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTrustStores: (
  config: WorkSpacesWebPaginationConfiguration,
  input: ListTrustStoresCommandInput,
  ...rest: any[]
) => Paginator<ListTrustStoresCommandOutput> = createPaginator<
  WorkSpacesWebPaginationConfiguration,
  ListTrustStoresCommandInput,
  ListTrustStoresCommandOutput
>(WorkSpacesWebClient, ListTrustStoresCommand, "nextToken", "nextToken", "maxResults");
