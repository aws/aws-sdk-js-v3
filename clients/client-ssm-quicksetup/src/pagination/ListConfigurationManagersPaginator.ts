// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListConfigurationManagersCommand,
  ListConfigurationManagersCommandInput,
  ListConfigurationManagersCommandOutput,
} from "../commands/ListConfigurationManagersCommand";
import { SSMQuickSetupClient } from "../SSMQuickSetupClient";
import { SSMQuickSetupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConfigurationManagers: (
  config: SSMQuickSetupPaginationConfiguration,
  input: ListConfigurationManagersCommandInput,
  ...rest: any[]
) => Paginator<ListConfigurationManagersCommandOutput> = createPaginator<
  SSMQuickSetupPaginationConfiguration,
  ListConfigurationManagersCommandInput,
  ListConfigurationManagersCommandOutput
>(SSMQuickSetupClient, ListConfigurationManagersCommand, "StartingToken", "NextToken", "MaxItems");
