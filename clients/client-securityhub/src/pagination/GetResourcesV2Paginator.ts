// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  GetResourcesV2Command,
  GetResourcesV2CommandInput,
  GetResourcesV2CommandOutput,
} from "../commands/GetResourcesV2Command";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetResourcesV2: (
  config: SecurityHubPaginationConfiguration,
  input: GetResourcesV2CommandInput,
  ...rest: any[]
) => Paginator<GetResourcesV2CommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  GetResourcesV2CommandInput,
  GetResourcesV2CommandOutput
>(SecurityHubClient, GetResourcesV2Command, "NextToken", "NextToken", "MaxResults");
