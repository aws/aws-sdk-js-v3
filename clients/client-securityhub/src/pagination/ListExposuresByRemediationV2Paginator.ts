// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListExposuresByRemediationV2Command,
  ListExposuresByRemediationV2CommandInput,
  ListExposuresByRemediationV2CommandOutput,
} from "../commands/ListExposuresByRemediationV2Command";
import { SecurityHubClient } from "../SecurityHubClient";
import type { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExposuresByRemediationV2: (
  config: SecurityHubPaginationConfiguration,
  input: ListExposuresByRemediationV2CommandInput,
  ...rest: any[]
) => Paginator<ListExposuresByRemediationV2CommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  ListExposuresByRemediationV2CommandInput,
  ListExposuresByRemediationV2CommandOutput
>(SecurityHubClient, ListExposuresByRemediationV2Command, "NextToken", "NextToken", "MaxResults");
