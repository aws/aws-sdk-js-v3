// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { GetFindingsCommand, GetFindingsCommandInput, GetFindingsCommandOutput } from "../commands/GetFindingsCommand";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetFindings: (
  config: SecurityHubPaginationConfiguration,
  input: GetFindingsCommandInput,
  ...rest: any[]
) => Paginator<GetFindingsCommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  GetFindingsCommandInput,
  GetFindingsCommandOutput
>(SecurityHubClient, GetFindingsCommand, "NextToken", "NextToken", "MaxResults");
