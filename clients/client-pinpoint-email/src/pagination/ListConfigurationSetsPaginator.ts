// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListConfigurationSetsCommand,
  ListConfigurationSetsCommandInput,
  ListConfigurationSetsCommandOutput,
} from "../commands/ListConfigurationSetsCommand";
import { PinpointEmailClient } from "../PinpointEmailClient";
import { PinpointEmailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConfigurationSets: (
  config: PinpointEmailPaginationConfiguration,
  input: ListConfigurationSetsCommandInput,
  ...rest: any[]
) => Paginator<ListConfigurationSetsCommandOutput> = createPaginator<
  PinpointEmailPaginationConfiguration,
  ListConfigurationSetsCommandInput,
  ListConfigurationSetsCommandOutput
>(PinpointEmailClient, ListConfigurationSetsCommand, "NextToken", "NextToken", "PageSize");
