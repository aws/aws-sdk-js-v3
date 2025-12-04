// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSecurityPoliciesCommand,
  ListSecurityPoliciesCommandInput,
  ListSecurityPoliciesCommandOutput,
} from "../commands/ListSecurityPoliciesCommand";
import { TransferClient } from "../TransferClient";
import { TransferPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSecurityPolicies: (
  config: TransferPaginationConfiguration,
  input: ListSecurityPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListSecurityPoliciesCommandOutput> = createPaginator<
  TransferPaginationConfiguration,
  ListSecurityPoliciesCommandInput,
  ListSecurityPoliciesCommandOutput
>(TransferClient, ListSecurityPoliciesCommand, "NextToken", "NextToken", "MaxResults");
