// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListApplicationAuthenticationMethodsCommand,
  ListApplicationAuthenticationMethodsCommandInput,
  ListApplicationAuthenticationMethodsCommandOutput,
} from "../commands/ListApplicationAuthenticationMethodsCommand";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplicationAuthenticationMethods: (
  config: SSOAdminPaginationConfiguration,
  input: ListApplicationAuthenticationMethodsCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationAuthenticationMethodsCommandOutput> = createPaginator<
  SSOAdminPaginationConfiguration,
  ListApplicationAuthenticationMethodsCommandInput,
  ListApplicationAuthenticationMethodsCommandOutput
>(SSOAdminClient, ListApplicationAuthenticationMethodsCommand, "NextToken", "NextToken", "");
