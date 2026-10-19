// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListIdentityStoresCommand,
  ListIdentityStoresCommandInput,
  ListIdentityStoresCommandOutput,
} from "../commands/ListIdentityStoresCommand";
import { IdentitystoreClient } from "../IdentitystoreClient";
import type { IdentitystorePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIdentityStores: (
  config: IdentitystorePaginationConfiguration,
  input: ListIdentityStoresCommandInput,
  ...rest: any[]
) => Paginator<ListIdentityStoresCommandOutput> = createPaginator<
  IdentitystorePaginationConfiguration,
  ListIdentityStoresCommandInput,
  ListIdentityStoresCommandOutput
>(IdentitystoreClient, ListIdentityStoresCommand, "NextToken", "NextToken", "MaxResults");
