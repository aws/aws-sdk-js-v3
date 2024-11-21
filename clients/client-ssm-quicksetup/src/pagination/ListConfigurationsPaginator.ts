// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListConfigurationsCommand,
  ListConfigurationsCommandInput,
  ListConfigurationsCommandOutput,
} from "../commands/ListConfigurationsCommand";
import { SSMQuickSetupClient } from "../SSMQuickSetupClient";
import { SSMQuickSetupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConfigurations: (
  config: SSMQuickSetupPaginationConfiguration,
  input: ListConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListConfigurationsCommandOutput> = createPaginator<
  SSMQuickSetupPaginationConfiguration,
  ListConfigurationsCommandInput,
  ListConfigurationsCommandOutput
>(SSMQuickSetupClient, ListConfigurationsCommand, "StartingToken", "NextToken", "MaxItems");
