// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListPartsCommand, ListPartsCommandInput, ListPartsCommandOutput } from "../commands/ListPartsCommand";
import { S3Client } from "../S3Client";
import { S3PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListParts: (
  config: S3PaginationConfiguration,
  input: ListPartsCommandInput,
  ...rest: any[]
) => Paginator<ListPartsCommandOutput> = createPaginator<
  S3PaginationConfiguration,
  ListPartsCommandInput,
  ListPartsCommandOutput
>(S3Client, ListPartsCommand, "PartNumberMarker", "NextPartNumberMarker", "MaxParts");
