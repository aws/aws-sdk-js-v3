// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTableBucketsCommand,
  ListTableBucketsCommandInput,
  ListTableBucketsCommandOutput,
} from "../commands/ListTableBucketsCommand";
import { S3TablesClient } from "../S3TablesClient";
import { S3TablesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTableBuckets: (
  config: S3TablesPaginationConfiguration,
  input: ListTableBucketsCommandInput,
  ...rest: any[]
) => Paginator<ListTableBucketsCommandOutput> = createPaginator<
  S3TablesPaginationConfiguration,
  ListTableBucketsCommandInput,
  ListTableBucketsCommandOutput
>(S3TablesClient, ListTableBucketsCommand, "continuationToken", "continuationToken", "maxBuckets");
