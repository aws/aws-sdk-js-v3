// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetServerDetailsCommand,
  GetServerDetailsCommandInput,
  GetServerDetailsCommandOutput,
} from "../commands/GetServerDetailsCommand";
import { MigrationHubStrategyClient } from "../MigrationHubStrategyClient";
import { MigrationHubStrategyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetServerDetails: (
  config: MigrationHubStrategyPaginationConfiguration,
  input: GetServerDetailsCommandInput,
  ...rest: any[]
) => Paginator<GetServerDetailsCommandOutput> = createPaginator<
  MigrationHubStrategyPaginationConfiguration,
  GetServerDetailsCommandInput,
  GetServerDetailsCommandOutput
>(MigrationHubStrategyClient, GetServerDetailsCommand, "nextToken", "nextToken", "maxResults");
