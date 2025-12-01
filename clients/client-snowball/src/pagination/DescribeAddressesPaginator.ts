// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeAddressesCommand,
  DescribeAddressesCommandInput,
  DescribeAddressesCommandOutput,
} from "../commands/DescribeAddressesCommand";
import { SnowballClient } from "../SnowballClient";
import { SnowballPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAddresses: (
  config: SnowballPaginationConfiguration,
  input: DescribeAddressesCommandInput,
  ...rest: any[]
) => Paginator<DescribeAddressesCommandOutput> = createPaginator<
  SnowballPaginationConfiguration,
  DescribeAddressesCommandInput,
  DescribeAddressesCommandOutput
>(SnowballClient, DescribeAddressesCommand, "NextToken", "NextToken", "MaxResults");
