// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListIndexesCommand, ListIndexesCommandInput, ListIndexesCommandOutput } from "../commands/ListIndexesCommand";
import { S3VectorsClient } from "../S3VectorsClient";
import { S3VectorsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIndexes: (
  config: S3VectorsPaginationConfiguration,
  input: ListIndexesCommandInput,
  ...rest: any[]
) => Paginator<ListIndexesCommandOutput> = createPaginator<
  S3VectorsPaginationConfiguration,
  ListIndexesCommandInput,
  ListIndexesCommandOutput
>(S3VectorsClient, ListIndexesCommand, "nextToken", "nextToken", "maxResults");
