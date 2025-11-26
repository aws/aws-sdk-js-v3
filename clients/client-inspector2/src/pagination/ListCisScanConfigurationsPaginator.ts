// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCisScanConfigurationsCommand,
  ListCisScanConfigurationsCommandInput,
  ListCisScanConfigurationsCommandOutput,
} from "../commands/ListCisScanConfigurationsCommand";
import { Inspector2Client } from "../Inspector2Client";
import { Inspector2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCisScanConfigurations: (
  config: Inspector2PaginationConfiguration,
  input: ListCisScanConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListCisScanConfigurationsCommandOutput> = createPaginator<
  Inspector2PaginationConfiguration,
  ListCisScanConfigurationsCommandInput,
  ListCisScanConfigurationsCommandOutput
>(Inspector2Client, ListCisScanConfigurationsCommand, "nextToken", "nextToken", "maxResults");
