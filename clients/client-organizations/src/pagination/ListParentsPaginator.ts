// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListParentsCommand, ListParentsCommandInput, ListParentsCommandOutput } from "../commands/ListParentsCommand";
import { OrganizationsClient } from "../OrganizationsClient";
import { OrganizationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListParents: (
  config: OrganizationsPaginationConfiguration,
  input: ListParentsCommandInput,
  ...rest: any[]
) => Paginator<ListParentsCommandOutput> = createPaginator<
  OrganizationsPaginationConfiguration,
  ListParentsCommandInput,
  ListParentsCommandOutput
>(OrganizationsClient, ListParentsCommand, "NextToken", "NextToken", "MaxResults");
