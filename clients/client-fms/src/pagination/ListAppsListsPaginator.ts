// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAppsListsCommand,
  ListAppsListsCommandInput,
  ListAppsListsCommandOutput,
} from "../commands/ListAppsListsCommand";
import { FMSClient } from "../FMSClient";
import { FMSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAppsLists: (
  config: FMSPaginationConfiguration,
  input: ListAppsListsCommandInput,
  ...rest: any[]
) => Paginator<ListAppsListsCommandOutput> = createPaginator<
  FMSPaginationConfiguration,
  ListAppsListsCommandInput,
  ListAppsListsCommandOutput
>(FMSClient, ListAppsListsCommand, "NextToken", "NextToken", "MaxResults");
