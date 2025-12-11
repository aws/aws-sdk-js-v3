// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBrowserSettingsCommand,
  ListBrowserSettingsCommandInput,
  ListBrowserSettingsCommandOutput,
} from "../commands/ListBrowserSettingsCommand";
import { WorkSpacesWebClient } from "../WorkSpacesWebClient";
import { WorkSpacesWebPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBrowserSettings: (
  config: WorkSpacesWebPaginationConfiguration,
  input: ListBrowserSettingsCommandInput,
  ...rest: any[]
) => Paginator<ListBrowserSettingsCommandOutput> = createPaginator<
  WorkSpacesWebPaginationConfiguration,
  ListBrowserSettingsCommandInput,
  ListBrowserSettingsCommandOutput
>(WorkSpacesWebClient, ListBrowserSettingsCommand, "nextToken", "nextToken", "maxResults");
