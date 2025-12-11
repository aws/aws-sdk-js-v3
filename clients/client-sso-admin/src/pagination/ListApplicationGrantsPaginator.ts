// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListApplicationGrantsCommand,
  ListApplicationGrantsCommandInput,
  ListApplicationGrantsCommandOutput,
} from "../commands/ListApplicationGrantsCommand";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplicationGrants: (
  config: SSOAdminPaginationConfiguration,
  input: ListApplicationGrantsCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationGrantsCommandOutput> = createPaginator<
  SSOAdminPaginationConfiguration,
  ListApplicationGrantsCommandInput,
  ListApplicationGrantsCommandOutput
>(SSOAdminClient, ListApplicationGrantsCommand, "NextToken", "NextToken", "");
