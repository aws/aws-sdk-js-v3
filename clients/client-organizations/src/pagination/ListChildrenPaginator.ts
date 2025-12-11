// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListChildrenCommand,
  ListChildrenCommandInput,
  ListChildrenCommandOutput,
} from "../commands/ListChildrenCommand";
import { OrganizationsClient } from "../OrganizationsClient";
import { OrganizationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChildren: (
  config: OrganizationsPaginationConfiguration,
  input: ListChildrenCommandInput,
  ...rest: any[]
) => Paginator<ListChildrenCommandOutput> = createPaginator<
  OrganizationsPaginationConfiguration,
  ListChildrenCommandInput,
  ListChildrenCommandOutput
>(OrganizationsClient, ListChildrenCommand, "NextToken", "NextToken", "MaxResults");
