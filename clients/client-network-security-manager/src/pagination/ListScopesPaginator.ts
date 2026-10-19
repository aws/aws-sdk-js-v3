// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListScopesCommand, ListScopesCommandInput, ListScopesCommandOutput } from "../commands/ListScopesCommand";
import { NetworkSecurityManagerClient } from "../NetworkSecurityManagerClient";
import type { NetworkSecurityManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListScopes: (
  config: NetworkSecurityManagerPaginationConfiguration,
  input: ListScopesCommandInput,
  ...rest: any[]
) => Paginator<ListScopesCommandOutput> = createPaginator<
  NetworkSecurityManagerPaginationConfiguration,
  ListScopesCommandInput,
  ListScopesCommandOutput
>(NetworkSecurityManagerClient, ListScopesCommand, "nextToken", "nextToken", "maxResults");
