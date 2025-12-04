// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListStorageConfigurationsCommand,
  ListStorageConfigurationsCommandInput,
  ListStorageConfigurationsCommandOutput,
} from "../commands/ListStorageConfigurationsCommand";
import { IVSRealTimeClient } from "../IVSRealTimeClient";
import { IVSRealTimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStorageConfigurations: (
  config: IVSRealTimePaginationConfiguration,
  input: ListStorageConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListStorageConfigurationsCommandOutput> = createPaginator<
  IVSRealTimePaginationConfiguration,
  ListStorageConfigurationsCommandInput,
  ListStorageConfigurationsCommandOutput
>(IVSRealTimeClient, ListStorageConfigurationsCommand, "nextToken", "nextToken", "maxResults");
