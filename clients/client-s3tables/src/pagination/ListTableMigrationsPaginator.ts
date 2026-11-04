// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTableMigrationsCommand,
  ListTableMigrationsCommandInput,
  ListTableMigrationsCommandOutput,
} from "../commands/ListTableMigrationsCommand";
import { S3TablesClient } from "../S3TablesClient";
import type { S3TablesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTableMigrations: (
  config: S3TablesPaginationConfiguration,
  input: ListTableMigrationsCommandInput,
  ...rest: any[]
) => Paginator<ListTableMigrationsCommandOutput> = createPaginator<
  S3TablesPaginationConfiguration,
  ListTableMigrationsCommandInput,
  ListTableMigrationsCommandOutput
>(S3TablesClient, ListTableMigrationsCommand, "nextToken", "nextToken", "maxResults");
