// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInfrastructureConfigurationsCommand,
  ListInfrastructureConfigurationsCommandInput,
  ListInfrastructureConfigurationsCommandOutput,
} from "../commands/ListInfrastructureConfigurationsCommand";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInfrastructureConfigurations: (
  config: ImagebuilderPaginationConfiguration,
  input: ListInfrastructureConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListInfrastructureConfigurationsCommandOutput> = createPaginator<
  ImagebuilderPaginationConfiguration,
  ListInfrastructureConfigurationsCommandInput,
  ListInfrastructureConfigurationsCommandOutput
>(ImagebuilderClient, ListInfrastructureConfigurationsCommand, "nextToken", "nextToken", "maxResults");
