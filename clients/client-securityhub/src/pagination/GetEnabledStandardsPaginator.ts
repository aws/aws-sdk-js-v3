// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetEnabledStandardsCommand,
  GetEnabledStandardsCommandInput,
  GetEnabledStandardsCommandOutput,
} from "../commands/GetEnabledStandardsCommand";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetEnabledStandards: (
  config: SecurityHubPaginationConfiguration,
  input: GetEnabledStandardsCommandInput,
  ...rest: any[]
) => Paginator<GetEnabledStandardsCommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  GetEnabledStandardsCommandInput,
  GetEnabledStandardsCommandOutput
>(SecurityHubClient, GetEnabledStandardsCommand, "NextToken", "NextToken", "MaxResults");
