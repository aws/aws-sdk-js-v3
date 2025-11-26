// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssociatedAccessPoliciesCommand,
  ListAssociatedAccessPoliciesCommandInput,
  ListAssociatedAccessPoliciesCommandOutput,
} from "../commands/ListAssociatedAccessPoliciesCommand";
import { EKSClient } from "../EKSClient";
import { EKSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssociatedAccessPolicies: (
  config: EKSPaginationConfiguration,
  input: ListAssociatedAccessPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListAssociatedAccessPoliciesCommandOutput> = createPaginator<
  EKSPaginationConfiguration,
  ListAssociatedAccessPoliciesCommandInput,
  ListAssociatedAccessPoliciesCommandOutput
>(EKSClient, ListAssociatedAccessPoliciesCommand, "nextToken", "nextToken", "maxResults");
