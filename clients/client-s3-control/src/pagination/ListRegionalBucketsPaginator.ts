// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRegionalBucketsCommand,
  ListRegionalBucketsCommandInput,
  ListRegionalBucketsCommandOutput,
} from "../commands/ListRegionalBucketsCommand";
import { S3ControlClient } from "../S3ControlClient";
import { S3ControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRegionalBuckets: (
  config: S3ControlPaginationConfiguration,
  input: ListRegionalBucketsCommandInput,
  ...rest: any[]
) => Paginator<ListRegionalBucketsCommandOutput> = createPaginator<
  S3ControlPaginationConfiguration,
  ListRegionalBucketsCommandInput,
  ListRegionalBucketsCommandOutput
>(S3ControlClient, ListRegionalBucketsCommand, "NextToken", "NextToken", "MaxResults");
