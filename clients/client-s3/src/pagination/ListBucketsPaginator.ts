// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListBucketsCommand, ListBucketsCommandInput, ListBucketsCommandOutput } from "../commands/ListBucketsCommand";
import { S3Client } from "../S3Client";
import { S3PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBuckets: (
  config: S3PaginationConfiguration,
  input: ListBucketsCommandInput,
  ...rest: any[]
) => Paginator<ListBucketsCommandOutput> = createPaginator<
  S3PaginationConfiguration,
  ListBucketsCommandInput,
  ListBucketsCommandOutput
>(S3Client, ListBucketsCommand, "ContinuationToken", "ContinuationToken", "MaxBuckets");
