// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListIdentityProvidersCommand,
  ListIdentityProvidersCommandInput,
  ListIdentityProvidersCommandOutput,
} from "../commands/ListIdentityProvidersCommand";
import { WorkSpacesWebClient } from "../WorkSpacesWebClient";
import { WorkSpacesWebPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIdentityProviders: (
  config: WorkSpacesWebPaginationConfiguration,
  input: ListIdentityProvidersCommandInput,
  ...rest: any[]
) => Paginator<ListIdentityProvidersCommandOutput> = createPaginator<
  WorkSpacesWebPaginationConfiguration,
  ListIdentityProvidersCommandInput,
  ListIdentityProvidersCommandOutput
>(WorkSpacesWebClient, ListIdentityProvidersCommand, "nextToken", "nextToken", "maxResults");
