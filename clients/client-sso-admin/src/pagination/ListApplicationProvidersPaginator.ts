// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListApplicationProvidersCommand,
  ListApplicationProvidersCommandInput,
  ListApplicationProvidersCommandOutput,
} from "../commands/ListApplicationProvidersCommand";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplicationProviders: (
  config: SSOAdminPaginationConfiguration,
  input: ListApplicationProvidersCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationProvidersCommandOutput> = createPaginator<
  SSOAdminPaginationConfiguration,
  ListApplicationProvidersCommandInput,
  ListApplicationProvidersCommandOutput
>(SSOAdminClient, ListApplicationProvidersCommand, "NextToken", "NextToken", "MaxResults");
