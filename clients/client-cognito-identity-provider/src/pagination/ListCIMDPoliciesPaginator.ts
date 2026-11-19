// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CognitoIdentityProviderClient } from "../CognitoIdentityProviderClient";
import {
  ListCIMDPoliciesCommand,
  ListCIMDPoliciesCommandInput,
  ListCIMDPoliciesCommandOutput,
} from "../commands/ListCIMDPoliciesCommand";
import type { CognitoIdentityProviderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCIMDPolicies: (
  config: CognitoIdentityProviderPaginationConfiguration,
  input: ListCIMDPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListCIMDPoliciesCommandOutput> = createPaginator<
  CognitoIdentityProviderPaginationConfiguration,
  ListCIMDPoliciesCommandInput,
  ListCIMDPoliciesCommandOutput
>(CognitoIdentityProviderClient, ListCIMDPoliciesCommand, "NextToken", "NextToken", "MaxResults");
