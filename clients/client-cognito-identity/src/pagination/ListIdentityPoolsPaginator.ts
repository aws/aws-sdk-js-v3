// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CognitoIdentityClient } from "../CognitoIdentityClient";
import {
  ListIdentityPoolsCommand,
  ListIdentityPoolsCommandInput,
  ListIdentityPoolsCommandOutput,
} from "../commands/ListIdentityPoolsCommand";
import { CognitoIdentityPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIdentityPools: (
  config: CognitoIdentityPaginationConfiguration,
  input: ListIdentityPoolsCommandInput,
  ...rest: any[]
) => Paginator<ListIdentityPoolsCommandOutput> = createPaginator<
  CognitoIdentityPaginationConfiguration,
  ListIdentityPoolsCommandInput,
  ListIdentityPoolsCommandOutput
>(CognitoIdentityClient, ListIdentityPoolsCommand, "NextToken", "NextToken", "MaxResults");
