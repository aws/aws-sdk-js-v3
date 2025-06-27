// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListIngestConfigurationsCommand,
  ListIngestConfigurationsCommandInput,
  ListIngestConfigurationsCommandOutput,
} from "../commands/ListIngestConfigurationsCommand";
import { IVSRealTimeClient } from "../IVSRealTimeClient";
import { IVSRealTimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIngestConfigurations: (
  config: IVSRealTimePaginationConfiguration,
  input: ListIngestConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListIngestConfigurationsCommandOutput> = createPaginator<
  IVSRealTimePaginationConfiguration,
  ListIngestConfigurationsCommandInput,
  ListIngestConfigurationsCommandOutput
>(IVSRealTimeClient, ListIngestConfigurationsCommand, "nextToken", "nextToken", "maxResults");
