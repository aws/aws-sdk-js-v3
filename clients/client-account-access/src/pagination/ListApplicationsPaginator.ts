// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AccountAccessClient } from "../AccountAccessClient";
import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "../commands/ListApplicationsCommand";
import type { AccountAccessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplications: (
  config: AccountAccessPaginationConfiguration,
  input: ListApplicationsCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationsCommandOutput> = createPaginator<
  AccountAccessPaginationConfiguration,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput
>(AccountAccessClient, ListApplicationsCommand, "nextToken", "nextToken", "");
