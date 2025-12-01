// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CognitoIdentityProviderClient } from "../CognitoIdentityProviderClient";
import {
  ListUserPoolClientsCommand,
  ListUserPoolClientsCommandInput,
  ListUserPoolClientsCommandOutput,
} from "../commands/ListUserPoolClientsCommand";
import { CognitoIdentityProviderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUserPoolClients: (
  config: CognitoIdentityProviderPaginationConfiguration,
  input: ListUserPoolClientsCommandInput,
  ...rest: any[]
) => Paginator<ListUserPoolClientsCommandOutput> = createPaginator<
  CognitoIdentityProviderPaginationConfiguration,
  ListUserPoolClientsCommandInput,
  ListUserPoolClientsCommandOutput
>(CognitoIdentityProviderClient, ListUserPoolClientsCommand, "NextToken", "NextToken", "MaxResults");
