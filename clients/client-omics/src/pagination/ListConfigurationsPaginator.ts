// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListConfigurationsCommand,
  ListConfigurationsCommandInput,
  ListConfigurationsCommandOutput,
} from "../commands/ListConfigurationsCommand";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConfigurations: (
  config: OmicsPaginationConfiguration,
  input: ListConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListConfigurationsCommandOutput> = createPaginator<
  OmicsPaginationConfiguration,
  ListConfigurationsCommandInput,
  ListConfigurationsCommandOutput
>(OmicsClient, ListConfigurationsCommand, "startingToken", "nextToken", "maxResults");
