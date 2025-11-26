// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AmplifyClient } from "../AmplifyClient";
import { ListAppsCommand, ListAppsCommandInput, ListAppsCommandOutput } from "../commands/ListAppsCommand";
import { AmplifyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApps: (
  config: AmplifyPaginationConfiguration,
  input: ListAppsCommandInput,
  ...rest: any[]
) => Paginator<ListAppsCommandOutput> = createPaginator<
  AmplifyPaginationConfiguration,
  ListAppsCommandInput,
  ListAppsCommandOutput
>(AmplifyClient, ListAppsCommand, "nextToken", "nextToken", "maxResults");
