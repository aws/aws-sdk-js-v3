// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListStudioMembersCommand,
  ListStudioMembersCommandInput,
  ListStudioMembersCommandOutput,
} from "../commands/ListStudioMembersCommand";
import { NimbleClient } from "../NimbleClient";
import { NimblePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStudioMembers: (
  config: NimblePaginationConfiguration,
  input: ListStudioMembersCommandInput,
  ...rest: any[]
) => Paginator<ListStudioMembersCommandOutput> = createPaginator<
  NimblePaginationConfiguration,
  ListStudioMembersCommandInput,
  ListStudioMembersCommandOutput
>(NimbleClient, ListStudioMembersCommand, "nextToken", "nextToken", "maxResults");
