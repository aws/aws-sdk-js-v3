// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetSoftwareV2Command,
  GetSoftwareV2CommandInput,
  GetSoftwareV2CommandOutput,
} from "../commands/GetSoftwareV2Command";
import { SecurityHubClient } from "../SecurityHubClient";
import type { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetSoftwareV2: (
  config: SecurityHubPaginationConfiguration,
  input: GetSoftwareV2CommandInput,
  ...rest: any[]
) => Paginator<GetSoftwareV2CommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  GetSoftwareV2CommandInput,
  GetSoftwareV2CommandOutput
>(SecurityHubClient, GetSoftwareV2Command, "NextToken", "NextToken", "MaxResults");
