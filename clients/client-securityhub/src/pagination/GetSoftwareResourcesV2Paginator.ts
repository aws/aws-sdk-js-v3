// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetSoftwareResourcesV2Command,
  GetSoftwareResourcesV2CommandInput,
  GetSoftwareResourcesV2CommandOutput,
} from "../commands/GetSoftwareResourcesV2Command";
import { SecurityHubClient } from "../SecurityHubClient";
import type { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetSoftwareResourcesV2: (
  config: SecurityHubPaginationConfiguration,
  input: GetSoftwareResourcesV2CommandInput,
  ...rest: any[]
) => Paginator<GetSoftwareResourcesV2CommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  GetSoftwareResourcesV2CommandInput,
  GetSoftwareResourcesV2CommandOutput
>(SecurityHubClient, GetSoftwareResourcesV2Command, "NextToken", "NextToken", "MaxResults");
