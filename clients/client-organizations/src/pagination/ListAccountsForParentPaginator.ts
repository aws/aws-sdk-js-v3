// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccountsForParentCommand,
  ListAccountsForParentCommandInput,
  ListAccountsForParentCommandOutput,
} from "../commands/ListAccountsForParentCommand";
import { OrganizationsClient } from "../OrganizationsClient";
import { OrganizationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccountsForParent: (
  config: OrganizationsPaginationConfiguration,
  input: ListAccountsForParentCommandInput,
  ...rest: any[]
) => Paginator<ListAccountsForParentCommandOutput> = createPaginator<
  OrganizationsPaginationConfiguration,
  ListAccountsForParentCommandInput,
  ListAccountsForParentCommandOutput
>(OrganizationsClient, ListAccountsForParentCommand, "NextToken", "NextToken", "MaxResults");
