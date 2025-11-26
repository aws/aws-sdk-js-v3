// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProviderServicesCommand,
  ListProviderServicesCommandInput,
  ListProviderServicesCommandOutput,
} from "../commands/ListProviderServicesCommand";
import { EntityResolutionClient } from "../EntityResolutionClient";
import { EntityResolutionPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProviderServices: (
  config: EntityResolutionPaginationConfiguration,
  input: ListProviderServicesCommandInput,
  ...rest: any[]
) => Paginator<ListProviderServicesCommandOutput> = createPaginator<
  EntityResolutionPaginationConfiguration,
  ListProviderServicesCommandInput,
  ListProviderServicesCommandOutput
>(EntityResolutionClient, ListProviderServicesCommand, "nextToken", "nextToken", "maxResults");
