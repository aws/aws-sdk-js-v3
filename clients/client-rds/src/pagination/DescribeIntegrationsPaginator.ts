// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeIntegrationsCommand,
  DescribeIntegrationsCommandInput,
  DescribeIntegrationsCommandOutput,
} from "../commands/DescribeIntegrationsCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeIntegrations: (
  config: RDSPaginationConfiguration,
  input: DescribeIntegrationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeIntegrationsCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeIntegrationsCommandInput,
  DescribeIntegrationsCommandOutput
>(RDSClient, DescribeIntegrationsCommand, "Marker", "Marker", "MaxRecords");
