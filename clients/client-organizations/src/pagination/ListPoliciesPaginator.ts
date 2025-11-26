// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPoliciesCommand,
  ListPoliciesCommandInput,
  ListPoliciesCommandOutput,
} from "../commands/ListPoliciesCommand";
import { OrganizationsClient } from "../OrganizationsClient";
import { OrganizationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPolicies: (
  config: OrganizationsPaginationConfiguration,
  input: ListPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListPoliciesCommandOutput> = createPaginator<
  OrganizationsPaginationConfiguration,
  ListPoliciesCommandInput,
  ListPoliciesCommandOutput
>(OrganizationsClient, ListPoliciesCommand, "NextToken", "NextToken", "MaxResults");
