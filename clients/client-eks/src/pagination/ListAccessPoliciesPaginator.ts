// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccessPoliciesCommand,
  ListAccessPoliciesCommandInput,
  ListAccessPoliciesCommandOutput,
} from "../commands/ListAccessPoliciesCommand";
import { EKSClient } from "../EKSClient";
import { EKSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccessPolicies: (
  config: EKSPaginationConfiguration,
  input: ListAccessPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListAccessPoliciesCommandOutput> = createPaginator<
  EKSPaginationConfiguration,
  ListAccessPoliciesCommandInput,
  ListAccessPoliciesCommandOutput
>(EKSClient, ListAccessPoliciesCommand, "nextToken", "nextToken", "maxResults");
