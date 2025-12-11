// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeEndpointAccessCommand,
  DescribeEndpointAccessCommandInput,
  DescribeEndpointAccessCommandOutput,
} from "../commands/DescribeEndpointAccessCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEndpointAccess: (
  config: RedshiftPaginationConfiguration,
  input: DescribeEndpointAccessCommandInput,
  ...rest: any[]
) => Paginator<DescribeEndpointAccessCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeEndpointAccessCommandInput,
  DescribeEndpointAccessCommandOutput
>(RedshiftClient, DescribeEndpointAccessCommand, "Marker", "Marker", "MaxRecords");
