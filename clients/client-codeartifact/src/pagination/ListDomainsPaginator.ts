// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeartifactClient } from "../CodeartifactClient";
import { ListDomainsCommand, ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import { CodeartifactPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDomains: (
  config: CodeartifactPaginationConfiguration,
  input: ListDomainsCommandInput,
  ...rest: any[]
) => Paginator<ListDomainsCommandOutput> = createPaginator<
  CodeartifactPaginationConfiguration,
  ListDomainsCommandInput,
  ListDomainsCommandOutput
>(CodeartifactClient, ListDomainsCommand, "nextToken", "nextToken", "maxResults");
