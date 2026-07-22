// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListConnectorScanConfigurationsCommand,
  ListConnectorScanConfigurationsCommandInput,
  ListConnectorScanConfigurationsCommandOutput,
} from "../commands/ListConnectorScanConfigurationsCommand";
import { Inspector2Client } from "../Inspector2Client";
import type { Inspector2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConnectorScanConfigurations: (
  config: Inspector2PaginationConfiguration,
  input: ListConnectorScanConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListConnectorScanConfigurationsCommandOutput> = createPaginator<
  Inspector2PaginationConfiguration,
  ListConnectorScanConfigurationsCommandInput,
  ListConnectorScanConfigurationsCommandOutput
>(Inspector2Client, ListConnectorScanConfigurationsCommand, "nextToken", "nextToken", "maxResults");
