// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetRemediationsV2Command,
  GetRemediationsV2CommandInput,
  GetRemediationsV2CommandOutput,
} from "../commands/GetRemediationsV2Command";
import { SecurityHubClient } from "../SecurityHubClient";
import type { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetRemediationsV2: (
  config: SecurityHubPaginationConfiguration,
  input: GetRemediationsV2CommandInput,
  ...rest: any[]
) => Paginator<GetRemediationsV2CommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  GetRemediationsV2CommandInput,
  GetRemediationsV2CommandOutput
>(SecurityHubClient, GetRemediationsV2Command, "NextToken", "NextToken", "MaxResults");
