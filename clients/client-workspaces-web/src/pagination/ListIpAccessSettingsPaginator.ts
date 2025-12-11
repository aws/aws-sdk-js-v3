// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListIpAccessSettingsCommand,
  ListIpAccessSettingsCommandInput,
  ListIpAccessSettingsCommandOutput,
} from "../commands/ListIpAccessSettingsCommand";
import { WorkSpacesWebClient } from "../WorkSpacesWebClient";
import { WorkSpacesWebPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIpAccessSettings: (
  config: WorkSpacesWebPaginationConfiguration,
  input: ListIpAccessSettingsCommandInput,
  ...rest: any[]
) => Paginator<ListIpAccessSettingsCommandOutput> = createPaginator<
  WorkSpacesWebPaginationConfiguration,
  ListIpAccessSettingsCommandInput,
  ListIpAccessSettingsCommandOutput
>(WorkSpacesWebClient, ListIpAccessSettingsCommand, "nextToken", "nextToken", "maxResults");
