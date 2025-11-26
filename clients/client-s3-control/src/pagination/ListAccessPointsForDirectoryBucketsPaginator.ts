// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccessPointsForDirectoryBucketsCommand,
  ListAccessPointsForDirectoryBucketsCommandInput,
  ListAccessPointsForDirectoryBucketsCommandOutput,
} from "../commands/ListAccessPointsForDirectoryBucketsCommand";
import { S3ControlClient } from "../S3ControlClient";
import { S3ControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccessPointsForDirectoryBuckets: (
  config: S3ControlPaginationConfiguration,
  input: ListAccessPointsForDirectoryBucketsCommandInput,
  ...rest: any[]
) => Paginator<ListAccessPointsForDirectoryBucketsCommandOutput> = createPaginator<
  S3ControlPaginationConfiguration,
  ListAccessPointsForDirectoryBucketsCommandInput,
  ListAccessPointsForDirectoryBucketsCommandOutput
>(S3ControlClient, ListAccessPointsForDirectoryBucketsCommand, "NextToken", "NextToken", "MaxResults");
