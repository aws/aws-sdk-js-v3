// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListLaunchProfileMembersCommand,
  ListLaunchProfileMembersCommandInput,
  ListLaunchProfileMembersCommandOutput,
} from "../commands/ListLaunchProfileMembersCommand";
import { NimbleClient } from "../NimbleClient";
import { NimblePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLaunchProfileMembers: (
  config: NimblePaginationConfiguration,
  input: ListLaunchProfileMembersCommandInput,
  ...rest: any[]
) => Paginator<ListLaunchProfileMembersCommandOutput> = createPaginator<
  NimblePaginationConfiguration,
  ListLaunchProfileMembersCommandInput,
  ListLaunchProfileMembersCommandOutput
>(NimbleClient, ListLaunchProfileMembersCommand, "nextToken", "nextToken", "maxResults");
