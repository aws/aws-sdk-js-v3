// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccessPointsCommand,
  ListAccessPointsCommandInput,
  ListAccessPointsCommandOutput,
} from "../commands/ListAccessPointsCommand";
import { S3FilesClient } from "../S3FilesClient";
import type { S3FilesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccessPoints: (
  config: S3FilesPaginationConfiguration,
  input: ListAccessPointsCommandInput,
  ...rest: any[]
) => Paginator<ListAccessPointsCommandOutput> = createPaginator<
  S3FilesPaginationConfiguration,
  ListAccessPointsCommandInput,
  ListAccessPointsCommandOutput
>(S3FilesClient, ListAccessPointsCommand, "nextToken", "nextToken", "maxResults");
