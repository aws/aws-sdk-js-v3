// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccountsWithInvalidEffectivePolicyCommand,
  ListAccountsWithInvalidEffectivePolicyCommandInput,
  ListAccountsWithInvalidEffectivePolicyCommandOutput,
} from "../commands/ListAccountsWithInvalidEffectivePolicyCommand";
import { OrganizationsClient } from "../OrganizationsClient";
import { OrganizationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccountsWithInvalidEffectivePolicy: (
  config: OrganizationsPaginationConfiguration,
  input: ListAccountsWithInvalidEffectivePolicyCommandInput,
  ...rest: any[]
) => Paginator<ListAccountsWithInvalidEffectivePolicyCommandOutput> = createPaginator<
  OrganizationsPaginationConfiguration,
  ListAccountsWithInvalidEffectivePolicyCommandInput,
  ListAccountsWithInvalidEffectivePolicyCommandOutput
>(OrganizationsClient, ListAccountsWithInvalidEffectivePolicyCommand, "NextToken", "NextToken", "MaxResults");
