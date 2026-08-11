// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AccountAccessClient } from "../AccountAccessClient";
import {
  ListEntitlementsCommand,
  ListEntitlementsCommandInput,
  ListEntitlementsCommandOutput,
} from "../commands/ListEntitlementsCommand";
import type { AccountAccessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEntitlements: (
  config: AccountAccessPaginationConfiguration,
  input: ListEntitlementsCommandInput,
  ...rest: any[]
) => Paginator<ListEntitlementsCommandOutput> = createPaginator<
  AccountAccessPaginationConfiguration,
  ListEntitlementsCommandInput,
  ListEntitlementsCommandOutput
>(AccountAccessClient, ListEntitlementsCommand, "nextToken", "nextToken", "");
