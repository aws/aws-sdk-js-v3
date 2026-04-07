// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { S3FilesClient } from "../S3FilesClient";
import type { S3FilesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTagsForResource: (
  config: S3FilesPaginationConfiguration,
  input: ListTagsForResourceCommandInput,
  ...rest: any[]
) => Paginator<ListTagsForResourceCommandOutput> = createPaginator<
  S3FilesPaginationConfiguration,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
>(S3FilesClient, ListTagsForResourceCommand, "nextToken", "nextToken", "maxResults");
