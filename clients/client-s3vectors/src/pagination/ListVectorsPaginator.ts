// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListVectorsCommand, ListVectorsCommandInput, ListVectorsCommandOutput } from "../commands/ListVectorsCommand";
import { S3VectorsClient } from "../S3VectorsClient";
import { S3VectorsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVectors: (
  config: S3VectorsPaginationConfiguration,
  input: ListVectorsCommandInput,
  ...rest: any[]
) => Paginator<ListVectorsCommandOutput> = createPaginator<
  S3VectorsPaginationConfiguration,
  ListVectorsCommandInput,
  ListVectorsCommandOutput
>(S3VectorsClient, ListVectorsCommand, "nextToken", "nextToken", "maxResults");
