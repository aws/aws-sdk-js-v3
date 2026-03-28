// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSecondaryInterfacesCommand,
  DescribeSecondaryInterfacesCommandInput,
  DescribeSecondaryInterfacesCommandOutput,
} from "../commands/DescribeSecondaryInterfacesCommand";
import { EC2Client } from "../EC2Client";
import type { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSecondaryInterfaces: (
  config: EC2PaginationConfiguration,
  input: DescribeSecondaryInterfacesCommandInput,
  ...rest: any[]
) => Paginator<DescribeSecondaryInterfacesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeSecondaryInterfacesCommandInput,
  DescribeSecondaryInterfacesCommandOutput
>(EC2Client, DescribeSecondaryInterfacesCommand, "NextToken", "NextToken", "MaxResults");
