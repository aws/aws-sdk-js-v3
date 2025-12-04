// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetMigrationsCommand,
  GetMigrationsCommandInput,
  GetMigrationsCommandOutput,
} from "../commands/GetMigrationsCommand";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetMigrations: (
  config: LexModelBuildingServicePaginationConfiguration,
  input: GetMigrationsCommandInput,
  ...rest: any[]
) => Paginator<GetMigrationsCommandOutput> = createPaginator<
  LexModelBuildingServicePaginationConfiguration,
  GetMigrationsCommandInput,
  GetMigrationsCommandOutput
>(LexModelBuildingServiceClient, GetMigrationsCommand, "nextToken", "nextToken", "maxResults");
