// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDelegatedServicesForAccountCommand,
  ListDelegatedServicesForAccountCommandInput,
  ListDelegatedServicesForAccountCommandOutput,
} from "../commands/ListDelegatedServicesForAccountCommand";
import { OrganizationsClient } from "../OrganizationsClient";
import { OrganizationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDelegatedServicesForAccount: (
  config: OrganizationsPaginationConfiguration,
  input: ListDelegatedServicesForAccountCommandInput,
  ...rest: any[]
) => Paginator<ListDelegatedServicesForAccountCommandOutput> = createPaginator<
  OrganizationsPaginationConfiguration,
  ListDelegatedServicesForAccountCommandInput,
  ListDelegatedServicesForAccountCommandOutput
>(OrganizationsClient, ListDelegatedServicesForAccountCommand, "NextToken", "NextToken", "MaxResults");
