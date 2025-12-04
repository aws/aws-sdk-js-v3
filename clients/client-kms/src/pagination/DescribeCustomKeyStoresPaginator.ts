// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeCustomKeyStoresCommand,
  DescribeCustomKeyStoresCommandInput,
  DescribeCustomKeyStoresCommandOutput,
} from "../commands/DescribeCustomKeyStoresCommand";
import { KMSClient } from "../KMSClient";
import { KMSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeCustomKeyStores: (
  config: KMSPaginationConfiguration,
  input: DescribeCustomKeyStoresCommandInput,
  ...rest: any[]
) => Paginator<DescribeCustomKeyStoresCommandOutput> = createPaginator<
  KMSPaginationConfiguration,
  DescribeCustomKeyStoresCommandInput,
  DescribeCustomKeyStoresCommandOutput
>(KMSClient, DescribeCustomKeyStoresCommand, "Marker", "NextMarker", "Limit");
