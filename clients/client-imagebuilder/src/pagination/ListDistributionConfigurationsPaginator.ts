// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDistributionConfigurationsCommand,
  ListDistributionConfigurationsCommandInput,
  ListDistributionConfigurationsCommandOutput,
} from "../commands/ListDistributionConfigurationsCommand";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDistributionConfigurations: (
  config: ImagebuilderPaginationConfiguration,
  input: ListDistributionConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListDistributionConfigurationsCommandOutput> = createPaginator<
  ImagebuilderPaginationConfiguration,
  ListDistributionConfigurationsCommandInput,
  ListDistributionConfigurationsCommandOutput
>(ImagebuilderClient, ListDistributionConfigurationsCommand, "nextToken", "nextToken", "maxResults");
