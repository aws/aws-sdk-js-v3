// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFarmMembersCommand,
  ListFarmMembersCommandInput,
  ListFarmMembersCommandOutput,
} from "../commands/ListFarmMembersCommand";
import { DeadlineClient } from "../DeadlineClient";
import { DeadlinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFarmMembers: (
  config: DeadlinePaginationConfiguration,
  input: ListFarmMembersCommandInput,
  ...rest: any[]
) => Paginator<ListFarmMembersCommandOutput> = createPaginator<
  DeadlinePaginationConfiguration,
  ListFarmMembersCommandInput,
  ListFarmMembersCommandOutput
>(DeadlineClient, ListFarmMembersCommand, "nextToken", "nextToken", "maxResults");
