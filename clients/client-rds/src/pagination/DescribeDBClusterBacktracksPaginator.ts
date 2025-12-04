// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBClusterBacktracksCommand,
  DescribeDBClusterBacktracksCommandInput,
  DescribeDBClusterBacktracksCommandOutput,
} from "../commands/DescribeDBClusterBacktracksCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBClusterBacktracks: (
  config: RDSPaginationConfiguration,
  input: DescribeDBClusterBacktracksCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBClusterBacktracksCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeDBClusterBacktracksCommandInput,
  DescribeDBClusterBacktracksCommandOutput
>(RDSClient, DescribeDBClusterBacktracksCommand, "Marker", "Marker", "MaxRecords");
