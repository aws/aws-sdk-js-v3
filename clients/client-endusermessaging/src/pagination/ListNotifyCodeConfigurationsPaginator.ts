// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNotifyCodeConfigurationsCommand,
  ListNotifyCodeConfigurationsCommandInput,
  ListNotifyCodeConfigurationsCommandOutput,
} from "../commands/ListNotifyCodeConfigurationsCommand";
import { EndUserMessagingClient } from "../EndUserMessagingClient";
import type { EndUserMessagingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNotifyCodeConfigurations: (
  config: EndUserMessagingPaginationConfiguration,
  input: ListNotifyCodeConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListNotifyCodeConfigurationsCommandOutput> = createPaginator<
  EndUserMessagingPaginationConfiguration,
  ListNotifyCodeConfigurationsCommandInput,
  ListNotifyCodeConfigurationsCommandOutput
>(EndUserMessagingClient, ListNotifyCodeConfigurationsCommand, "nextToken", "nextToken", "maxResults");
