// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSlackWorkspaceConfigurationsCommand,
  ListSlackWorkspaceConfigurationsCommandInput,
  ListSlackWorkspaceConfigurationsCommandOutput,
} from "../commands/ListSlackWorkspaceConfigurationsCommand";
import { SupportAppClient } from "../SupportAppClient";
import { SupportAppPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSlackWorkspaceConfigurations: (
  config: SupportAppPaginationConfiguration,
  input: ListSlackWorkspaceConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListSlackWorkspaceConfigurationsCommandOutput> = createPaginator<
  SupportAppPaginationConfiguration,
  ListSlackWorkspaceConfigurationsCommandInput,
  ListSlackWorkspaceConfigurationsCommandOutput
>(SupportAppClient, ListSlackWorkspaceConfigurationsCommand, "nextToken", "nextToken", "");
