// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeEndpointAuthorizationCommand,
  DescribeEndpointAuthorizationCommandInput,
  DescribeEndpointAuthorizationCommandOutput,
} from "../commands/DescribeEndpointAuthorizationCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEndpointAuthorization: (
  config: RedshiftPaginationConfiguration,
  input: DescribeEndpointAuthorizationCommandInput,
  ...rest: any[]
) => Paginator<DescribeEndpointAuthorizationCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeEndpointAuthorizationCommandInput,
  DescribeEndpointAuthorizationCommandOutput
>(RedshiftClient, DescribeEndpointAuthorizationCommand, "Marker", "Marker", "MaxRecords");
