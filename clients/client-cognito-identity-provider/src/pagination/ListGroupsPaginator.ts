// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CognitoIdentityProviderClient } from "../CognitoIdentityProviderClient";
import { ListGroupsCommand, ListGroupsCommandInput, ListGroupsCommandOutput } from "../commands/ListGroupsCommand";
import { CognitoIdentityProviderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGroups: (
  config: CognitoIdentityProviderPaginationConfiguration,
  input: ListGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListGroupsCommandOutput> = createPaginator<
  CognitoIdentityProviderPaginationConfiguration,
  ListGroupsCommandInput,
  ListGroupsCommandOutput
>(CognitoIdentityProviderClient, ListGroupsCommand, "NextToken", "NextToken", "Limit");
