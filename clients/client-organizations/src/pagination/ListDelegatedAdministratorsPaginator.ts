// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDelegatedAdministratorsCommand,
  ListDelegatedAdministratorsCommandInput,
  ListDelegatedAdministratorsCommandOutput,
} from "../commands/ListDelegatedAdministratorsCommand";
import { OrganizationsClient } from "../OrganizationsClient";
import { OrganizationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDelegatedAdministrators: (
  config: OrganizationsPaginationConfiguration,
  input: ListDelegatedAdministratorsCommandInput,
  ...rest: any[]
) => Paginator<ListDelegatedAdministratorsCommandOutput> = createPaginator<
  OrganizationsPaginationConfiguration,
  ListDelegatedAdministratorsCommandInput,
  ListDelegatedAdministratorsCommandOutput
>(OrganizationsClient, ListDelegatedAdministratorsCommand, "NextToken", "NextToken", "MaxResults");
