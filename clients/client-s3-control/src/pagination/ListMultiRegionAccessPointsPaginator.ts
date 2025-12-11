// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMultiRegionAccessPointsCommand,
  ListMultiRegionAccessPointsCommandInput,
  ListMultiRegionAccessPointsCommandOutput,
} from "../commands/ListMultiRegionAccessPointsCommand";
import { S3ControlClient } from "../S3ControlClient";
import { S3ControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMultiRegionAccessPoints: (
  config: S3ControlPaginationConfiguration,
  input: ListMultiRegionAccessPointsCommandInput,
  ...rest: any[]
) => Paginator<ListMultiRegionAccessPointsCommandOutput> = createPaginator<
  S3ControlPaginationConfiguration,
  ListMultiRegionAccessPointsCommandInput,
  ListMultiRegionAccessPointsCommandOutput
>(S3ControlClient, ListMultiRegionAccessPointsCommand, "NextToken", "NextToken", "MaxResults");
