// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListRootsCommand, ListRootsCommandInput, ListRootsCommandOutput } from "../commands/ListRootsCommand";
import { OrganizationsClient } from "../OrganizationsClient";
import { OrganizationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRoots: (
  config: OrganizationsPaginationConfiguration,
  input: ListRootsCommandInput,
  ...rest: any[]
) => Paginator<ListRootsCommandOutput> = createPaginator<
  OrganizationsPaginationConfiguration,
  ListRootsCommandInput,
  ListRootsCommandOutput
>(OrganizationsClient, ListRootsCommand, "NextToken", "NextToken", "MaxResults");
