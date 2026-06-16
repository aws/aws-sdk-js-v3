// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListObjectAnnotationsCommand,
  ListObjectAnnotationsCommandInput,
  ListObjectAnnotationsCommandOutput,
} from "../commands/ListObjectAnnotationsCommand";
import { S3Client } from "../S3Client";
import type { S3PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListObjectAnnotations: (
  config: S3PaginationConfiguration,
  input: ListObjectAnnotationsCommandInput,
  ...rest: any[]
) => Paginator<ListObjectAnnotationsCommandOutput> = createPaginator<
  S3PaginationConfiguration,
  ListObjectAnnotationsCommandInput,
  ListObjectAnnotationsCommandOutput
>(S3Client, ListObjectAnnotationsCommand, "ContinuationToken", "NextContinuationToken", "MaxAnnotationResults");
