// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CognitoIdentityProviderClient } from "../CognitoIdentityProviderClient";
import {
  ListIdentityProvidersCommand,
  ListIdentityProvidersCommandInput,
  ListIdentityProvidersCommandOutput,
} from "../commands/ListIdentityProvidersCommand";
import { CognitoIdentityProviderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIdentityProviders: (
  config: CognitoIdentityProviderPaginationConfiguration,
  input: ListIdentityProvidersCommandInput,
  ...rest: any[]
) => Paginator<ListIdentityProvidersCommandOutput> = createPaginator<
  CognitoIdentityProviderPaginationConfiguration,
  ListIdentityProvidersCommandInput,
  ListIdentityProvidersCommandOutput
>(CognitoIdentityProviderClient, ListIdentityProvidersCommand, "NextToken", "NextToken", "MaxResults");
