// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNetworkSettingsCommand,
  ListNetworkSettingsCommandInput,
  ListNetworkSettingsCommandOutput,
} from "../commands/ListNetworkSettingsCommand";
import { WorkSpacesWebClient } from "../WorkSpacesWebClient";
import { WorkSpacesWebPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNetworkSettings: (
  config: WorkSpacesWebPaginationConfiguration,
  input: ListNetworkSettingsCommandInput,
  ...rest: any[]
) => Paginator<ListNetworkSettingsCommandOutput> = createPaginator<
  WorkSpacesWebPaginationConfiguration,
  ListNetworkSettingsCommandInput,
  ListNetworkSettingsCommandOutput
>(WorkSpacesWebClient, ListNetworkSettingsCommand, "nextToken", "nextToken", "maxResults");
