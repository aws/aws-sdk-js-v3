// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ApplicationDiscoveryServiceClient } from "../ApplicationDiscoveryServiceClient";
import {
  ListConfigurationsCommand,
  ListConfigurationsCommandInput,
  ListConfigurationsCommandOutput,
} from "../commands/ListConfigurationsCommand";
import { ApplicationDiscoveryServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConfigurations: (
  config: ApplicationDiscoveryServicePaginationConfiguration,
  input: ListConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListConfigurationsCommandOutput> = createPaginator<
  ApplicationDiscoveryServicePaginationConfiguration,
  ListConfigurationsCommandInput,
  ListConfigurationsCommandOutput
>(ApplicationDiscoveryServiceClient, ListConfigurationsCommand, "nextToken", "nextToken", "maxResults");
