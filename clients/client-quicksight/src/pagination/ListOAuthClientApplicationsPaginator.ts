// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOAuthClientApplicationsCommand,
  ListOAuthClientApplicationsCommandInput,
  ListOAuthClientApplicationsCommandOutput,
} from "../commands/ListOAuthClientApplicationsCommand";
import { QuickSightClient } from "../QuickSightClient";
import type { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOAuthClientApplications: (
  config: QuickSightPaginationConfiguration,
  input: ListOAuthClientApplicationsCommandInput,
  ...rest: any[]
) => Paginator<ListOAuthClientApplicationsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListOAuthClientApplicationsCommandInput,
  ListOAuthClientApplicationsCommandOutput
>(QuickSightClient, ListOAuthClientApplicationsCommand, "NextToken", "NextToken", "MaxResults");
