// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListHandshakesForAccountCommand,
  ListHandshakesForAccountCommandInput,
  ListHandshakesForAccountCommandOutput,
} from "../commands/ListHandshakesForAccountCommand";
import { OrganizationsClient } from "../OrganizationsClient";
import { OrganizationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListHandshakesForAccount: (
  config: OrganizationsPaginationConfiguration,
  input: ListHandshakesForAccountCommandInput,
  ...rest: any[]
) => Paginator<ListHandshakesForAccountCommandOutput> = createPaginator<
  OrganizationsPaginationConfiguration,
  ListHandshakesForAccountCommandInput,
  ListHandshakesForAccountCommandOutput
>(OrganizationsClient, ListHandshakesForAccountCommand, "NextToken", "NextToken", "MaxResults");
