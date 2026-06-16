// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  QueryVectorsCommand,
  QueryVectorsCommandInput,
  QueryVectorsCommandOutput,
} from "../commands/QueryVectorsCommand";
import { S3VectorsClient } from "../S3VectorsClient";
import type { S3VectorsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateQueryVectors: (
  config: S3VectorsPaginationConfiguration,
  input: QueryVectorsCommandInput,
  ...rest: any[]
) => Paginator<QueryVectorsCommandOutput> = createPaginator<
  S3VectorsPaginationConfiguration,
  QueryVectorsCommandInput,
  QueryVectorsCommandOutput
>(S3VectorsClient, QueryVectorsCommand, "nextToken", "nextToken", "");
