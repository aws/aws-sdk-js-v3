// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLoggingConfigurationsCommand,
  ListLoggingConfigurationsCommandInput,
  ListLoggingConfigurationsCommandOutput,
} from "../commands/ListLoggingConfigurationsCommand";
import { IvschatClient } from "../IvschatClient";
import { IvschatPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLoggingConfigurations: (
  config: IvschatPaginationConfiguration,
  input: ListLoggingConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListLoggingConfigurationsCommandOutput> = createPaginator<
  IvschatPaginationConfiguration,
  ListLoggingConfigurationsCommandInput,
  ListLoggingConfigurationsCommandOutput
>(IvschatClient, ListLoggingConfigurationsCommand, "nextToken", "nextToken", "maxResults");
