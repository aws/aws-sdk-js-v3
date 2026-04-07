// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMountTargetsCommand,
  ListMountTargetsCommandInput,
  ListMountTargetsCommandOutput,
} from "../commands/ListMountTargetsCommand";
import { S3FilesClient } from "../S3FilesClient";
import type { S3FilesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMountTargets: (
  config: S3FilesPaginationConfiguration,
  input: ListMountTargetsCommandInput,
  ...rest: any[]
) => Paginator<ListMountTargetsCommandOutput> = createPaginator<
  S3FilesPaginationConfiguration,
  ListMountTargetsCommandInput,
  ListMountTargetsCommandOutput
>(S3FilesClient, ListMountTargetsCommand, "nextToken", "nextToken", "maxResults");
