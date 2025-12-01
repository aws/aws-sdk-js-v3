// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CognitoIdentityProviderClient } from "../CognitoIdentityProviderClient";
import {
  ListResourceServersCommand,
  ListResourceServersCommandInput,
  ListResourceServersCommandOutput,
} from "../commands/ListResourceServersCommand";
import { CognitoIdentityProviderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourceServers: (
  config: CognitoIdentityProviderPaginationConfiguration,
  input: ListResourceServersCommandInput,
  ...rest: any[]
) => Paginator<ListResourceServersCommandOutput> = createPaginator<
  CognitoIdentityProviderPaginationConfiguration,
  ListResourceServersCommandInput,
  ListResourceServersCommandOutput
>(CognitoIdentityProviderClient, ListResourceServersCommand, "NextToken", "NextToken", "MaxResults");
