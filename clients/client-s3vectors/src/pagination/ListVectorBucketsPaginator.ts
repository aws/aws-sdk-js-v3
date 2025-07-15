// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListVectorBucketsCommand,
  ListVectorBucketsCommandInput,
  ListVectorBucketsCommandOutput,
} from "../commands/ListVectorBucketsCommand";
import { S3VectorsClient } from "../S3VectorsClient";
import { S3VectorsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVectorBuckets: (
  config: S3VectorsPaginationConfiguration,
  input: ListVectorBucketsCommandInput,
  ...rest: any[]
) => Paginator<ListVectorBucketsCommandOutput> = createPaginator<
  S3VectorsPaginationConfiguration,
  ListVectorBucketsCommandInput,
  ListVectorBucketsCommandOutput
>(S3VectorsClient, ListVectorBucketsCommand, "nextToken", "nextToken", "maxResults");
