// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeHsmConfigurationsCommand,
  DescribeHsmConfigurationsCommandInput,
  DescribeHsmConfigurationsCommandOutput,
} from "../commands/DescribeHsmConfigurationsCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeHsmConfigurations: (
  config: RedshiftPaginationConfiguration,
  input: DescribeHsmConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeHsmConfigurationsCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeHsmConfigurationsCommandInput,
  DescribeHsmConfigurationsCommandOutput
>(RedshiftClient, DescribeHsmConfigurationsCommand, "Marker", "Marker", "MaxRecords");
