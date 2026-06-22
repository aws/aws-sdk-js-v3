// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ApplicationSignalsClient } from "../ApplicationSignalsClient";
import {
  ListInstrumentationConfigurationsCommand,
  ListInstrumentationConfigurationsCommandInput,
  ListInstrumentationConfigurationsCommandOutput,
} from "../commands/ListInstrumentationConfigurationsCommand";
import type { ApplicationSignalsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInstrumentationConfigurations: (
  config: ApplicationSignalsPaginationConfiguration,
  input: ListInstrumentationConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListInstrumentationConfigurationsCommandOutput> = createPaginator<
  ApplicationSignalsPaginationConfiguration,
  ListInstrumentationConfigurationsCommandInput,
  ListInstrumentationConfigurationsCommandOutput
>(ApplicationSignalsClient, ListInstrumentationConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
