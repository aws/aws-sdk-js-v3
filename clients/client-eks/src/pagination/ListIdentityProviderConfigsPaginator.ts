// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListIdentityProviderConfigsCommand,
  ListIdentityProviderConfigsCommandInput,
  ListIdentityProviderConfigsCommandOutput,
} from "../commands/ListIdentityProviderConfigsCommand";
import { EKSClient } from "../EKSClient";
import { EKSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIdentityProviderConfigs: (
  config: EKSPaginationConfiguration,
  input: ListIdentityProviderConfigsCommandInput,
  ...rest: any[]
) => Paginator<ListIdentityProviderConfigsCommandOutput> = createPaginator<
  EKSPaginationConfiguration,
  ListIdentityProviderConfigsCommandInput,
  ListIdentityProviderConfigsCommandOutput
>(EKSClient, ListIdentityProviderConfigsCommand, "nextToken", "nextToken", "maxResults");
