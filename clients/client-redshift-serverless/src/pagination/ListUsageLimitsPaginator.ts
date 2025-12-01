// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListUsageLimitsCommand,
  ListUsageLimitsCommandInput,
  ListUsageLimitsCommandOutput,
} from "../commands/ListUsageLimitsCommand";
import { RedshiftServerlessClient } from "../RedshiftServerlessClient";
import { RedshiftServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUsageLimits: (
  config: RedshiftServerlessPaginationConfiguration,
  input: ListUsageLimitsCommandInput,
  ...rest: any[]
) => Paginator<ListUsageLimitsCommandOutput> = createPaginator<
  RedshiftServerlessPaginationConfiguration,
  ListUsageLimitsCommandInput,
  ListUsageLimitsCommandOutput
>(RedshiftServerlessClient, ListUsageLimitsCommand, "nextToken", "nextToken", "maxResults");
