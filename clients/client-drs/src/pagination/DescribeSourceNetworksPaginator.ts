// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSourceNetworksCommand,
  DescribeSourceNetworksCommandInput,
  DescribeSourceNetworksCommandOutput,
} from "../commands/DescribeSourceNetworksCommand";
import { DrsClient } from "../DrsClient";
import { DrsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSourceNetworks: (
  config: DrsPaginationConfiguration,
  input: DescribeSourceNetworksCommandInput,
  ...rest: any[]
) => Paginator<DescribeSourceNetworksCommandOutput> = createPaginator<
  DrsPaginationConfiguration,
  DescribeSourceNetworksCommandInput,
  DescribeSourceNetworksCommandOutput
>(DrsClient, DescribeSourceNetworksCommand, "nextToken", "nextToken", "maxResults");
