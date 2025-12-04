// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CognitoIdentityProviderClient } from "../CognitoIdentityProviderClient";
import {
  ListUserPoolsCommand,
  ListUserPoolsCommandInput,
  ListUserPoolsCommandOutput,
} from "../commands/ListUserPoolsCommand";
import { CognitoIdentityProviderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUserPools: (
  config: CognitoIdentityProviderPaginationConfiguration,
  input: ListUserPoolsCommandInput,
  ...rest: any[]
) => Paginator<ListUserPoolsCommandOutput> = createPaginator<
  CognitoIdentityProviderPaginationConfiguration,
  ListUserPoolsCommandInput,
  ListUserPoolsCommandOutput
>(CognitoIdentityProviderClient, ListUserPoolsCommand, "NextToken", "NextToken", "MaxResults");
