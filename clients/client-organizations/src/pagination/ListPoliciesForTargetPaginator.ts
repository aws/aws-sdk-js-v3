// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPoliciesForTargetCommand,
  ListPoliciesForTargetCommandInput,
  ListPoliciesForTargetCommandOutput,
} from "../commands/ListPoliciesForTargetCommand";
import { OrganizationsClient } from "../OrganizationsClient";
import { OrganizationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPoliciesForTarget: (
  config: OrganizationsPaginationConfiguration,
  input: ListPoliciesForTargetCommandInput,
  ...rest: any[]
) => Paginator<ListPoliciesForTargetCommandOutput> = createPaginator<
  OrganizationsPaginationConfiguration,
  ListPoliciesForTargetCommandInput,
  ListPoliciesForTargetCommandOutput
>(OrganizationsClient, ListPoliciesForTargetCommand, "NextToken", "NextToken", "MaxResults");
