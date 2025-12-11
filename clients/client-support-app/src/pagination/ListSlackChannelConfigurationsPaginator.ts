// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSlackChannelConfigurationsCommand,
  ListSlackChannelConfigurationsCommandInput,
  ListSlackChannelConfigurationsCommandOutput,
} from "../commands/ListSlackChannelConfigurationsCommand";
import { SupportAppClient } from "../SupportAppClient";
import { SupportAppPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSlackChannelConfigurations: (
  config: SupportAppPaginationConfiguration,
  input: ListSlackChannelConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListSlackChannelConfigurationsCommandOutput> = createPaginator<
  SupportAppPaginationConfiguration,
  ListSlackChannelConfigurationsCommandInput,
  ListSlackChannelConfigurationsCommandOutput
>(SupportAppClient, ListSlackChannelConfigurationsCommand, "nextToken", "nextToken", "");
