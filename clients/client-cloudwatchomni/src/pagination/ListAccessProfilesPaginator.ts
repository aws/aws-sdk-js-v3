// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchOmniClient } from "../CloudWatchOmniClient";
import {
  ListAccessProfilesCommand,
  ListAccessProfilesCommandInput,
  ListAccessProfilesCommandOutput,
} from "../commands/ListAccessProfilesCommand";
import type { CloudWatchOmniPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccessProfiles: (
  config: CloudWatchOmniPaginationConfiguration,
  input: ListAccessProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListAccessProfilesCommandOutput> = createPaginator<
  CloudWatchOmniPaginationConfiguration,
  ListAccessProfilesCommandInput,
  ListAccessProfilesCommandOutput
>(CloudWatchOmniClient, ListAccessProfilesCommand, "nextToken", "nextToken", "maxResults");
