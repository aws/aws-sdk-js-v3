// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeClusterTracksCommand,
  DescribeClusterTracksCommandInput,
  DescribeClusterTracksCommandOutput,
} from "../commands/DescribeClusterTracksCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeClusterTracks: (
  config: RedshiftPaginationConfiguration,
  input: DescribeClusterTracksCommandInput,
  ...rest: any[]
) => Paginator<DescribeClusterTracksCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeClusterTracksCommandInput,
  DescribeClusterTracksCommandOutput
>(RedshiftClient, DescribeClusterTracksCommand, "Marker", "Marker", "MaxRecords");
