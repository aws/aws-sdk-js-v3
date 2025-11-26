// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeInboundIntegrationsCommand,
  DescribeInboundIntegrationsCommandInput,
  DescribeInboundIntegrationsCommandOutput,
} from "../commands/DescribeInboundIntegrationsCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeInboundIntegrations: (
  config: RedshiftPaginationConfiguration,
  input: DescribeInboundIntegrationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeInboundIntegrationsCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeInboundIntegrationsCommandInput,
  DescribeInboundIntegrationsCommandOutput
>(RedshiftClient, DescribeInboundIntegrationsCommand, "Marker", "Marker", "MaxRecords");
