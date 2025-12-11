// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDirectoryBucketsCommand,
  ListDirectoryBucketsCommandInput,
  ListDirectoryBucketsCommandOutput,
} from "../commands/ListDirectoryBucketsCommand";
import { S3Client } from "../S3Client";
import { S3PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDirectoryBuckets: (
  config: S3PaginationConfiguration,
  input: ListDirectoryBucketsCommandInput,
  ...rest: any[]
) => Paginator<ListDirectoryBucketsCommandOutput> = createPaginator<
  S3PaginationConfiguration,
  ListDirectoryBucketsCommandInput,
  ListDirectoryBucketsCommandOutput
>(S3Client, ListDirectoryBucketsCommand, "ContinuationToken", "ContinuationToken", "MaxDirectoryBuckets");
