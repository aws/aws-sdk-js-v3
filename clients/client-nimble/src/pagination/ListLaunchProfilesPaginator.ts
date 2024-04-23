// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListLaunchProfilesCommand,
  ListLaunchProfilesCommandInput,
  ListLaunchProfilesCommandOutput,
} from "../commands/ListLaunchProfilesCommand";
import { NimbleClient } from "../NimbleClient";
import { NimblePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLaunchProfiles: (
  config: NimblePaginationConfiguration,
  input: ListLaunchProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListLaunchProfilesCommandOutput> = createPaginator<
  NimblePaginationConfiguration,
  ListLaunchProfilesCommandInput,
  ListLaunchProfilesCommandOutput
>(NimbleClient, ListLaunchProfilesCommand, "nextToken", "nextToken", "maxResults");
