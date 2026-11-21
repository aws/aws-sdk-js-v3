// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccessControlApplicationsCommand,
  ListAccessControlApplicationsCommandInput,
  ListAccessControlApplicationsCommandOutput,
} from "../commands/ListAccessControlApplicationsCommand";
import { QuickSightClient } from "../QuickSightClient";
import type { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccessControlApplications: (
  config: QuickSightPaginationConfiguration,
  input: ListAccessControlApplicationsCommandInput,
  ...rest: any[]
) => Paginator<ListAccessControlApplicationsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListAccessControlApplicationsCommandInput,
  ListAccessControlApplicationsCommandOutput
>(QuickSightClient, ListAccessControlApplicationsCommand, "NextToken", "NextToken", "MaxResults");
