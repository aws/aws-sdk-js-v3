// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchOmniClient } from "../CloudWatchOmniClient";
import {
  SearchPrincipalsCommand,
  SearchPrincipalsCommandInput,
  SearchPrincipalsCommandOutput,
} from "../commands/SearchPrincipalsCommand";
import type { CloudWatchOmniPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchPrincipals: (
  config: CloudWatchOmniPaginationConfiguration,
  input: SearchPrincipalsCommandInput,
  ...rest: any[]
) => Paginator<SearchPrincipalsCommandOutput> = createPaginator<
  CloudWatchOmniPaginationConfiguration,
  SearchPrincipalsCommandInput,
  SearchPrincipalsCommandOutput
>(CloudWatchOmniClient, SearchPrincipalsCommand, "nextToken", "nextToken", "maxResults");
