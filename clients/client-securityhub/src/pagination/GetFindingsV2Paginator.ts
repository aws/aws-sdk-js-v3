// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetFindingsV2Command,
  GetFindingsV2CommandInput,
  GetFindingsV2CommandOutput,
} from "../commands/GetFindingsV2Command";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetFindingsV2: (
  config: SecurityHubPaginationConfiguration,
  input: GetFindingsV2CommandInput,
  ...rest: any[]
) => Paginator<GetFindingsV2CommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  GetFindingsV2CommandInput,
  GetFindingsV2CommandOutput
>(SecurityHubClient, GetFindingsV2Command, "NextToken", "NextToken", "MaxResults");
