// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  DescribeIntegrationsCommand,
  DescribeIntegrationsCommandInput,
  DescribeIntegrationsCommandOutput,
} from "../commands/DescribeIntegrationsCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeIntegrations: (
  config: RedshiftPaginationConfiguration,
  input: DescribeIntegrationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeIntegrationsCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeIntegrationsCommandInput,
  DescribeIntegrationsCommandOutput
>(RedshiftClient, DescribeIntegrationsCommand, "Marker", "Marker", "MaxRecords");
