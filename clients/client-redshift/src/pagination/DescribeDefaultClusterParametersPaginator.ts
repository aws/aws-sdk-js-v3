// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDefaultClusterParametersCommand,
  DescribeDefaultClusterParametersCommandInput,
  DescribeDefaultClusterParametersCommandOutput,
} from "../commands/DescribeDefaultClusterParametersCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDefaultClusterParameters: (
  config: RedshiftPaginationConfiguration,
  input: DescribeDefaultClusterParametersCommandInput,
  ...rest: any[]
) => Paginator<DescribeDefaultClusterParametersCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeDefaultClusterParametersCommandInput,
  DescribeDefaultClusterParametersCommandOutput
>(RedshiftClient, DescribeDefaultClusterParametersCommand, "Marker", "DefaultClusterParameters.Marker", "MaxRecords");
