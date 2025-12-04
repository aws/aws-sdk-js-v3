// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListApplicationAccessScopesCommand,
  ListApplicationAccessScopesCommandInput,
  ListApplicationAccessScopesCommandOutput,
} from "../commands/ListApplicationAccessScopesCommand";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplicationAccessScopes: (
  config: SSOAdminPaginationConfiguration,
  input: ListApplicationAccessScopesCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationAccessScopesCommandOutput> = createPaginator<
  SSOAdminPaginationConfiguration,
  ListApplicationAccessScopesCommandInput,
  ListApplicationAccessScopesCommandOutput
>(SSOAdminClient, ListApplicationAccessScopesCommand, "NextToken", "NextToken", "MaxResults");
