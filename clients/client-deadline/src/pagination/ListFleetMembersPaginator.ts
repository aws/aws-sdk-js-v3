// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFleetMembersCommand,
  ListFleetMembersCommandInput,
  ListFleetMembersCommandOutput,
} from "../commands/ListFleetMembersCommand";
import { DeadlineClient } from "../DeadlineClient";
import { DeadlinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFleetMembers: (
  config: DeadlinePaginationConfiguration,
  input: ListFleetMembersCommandInput,
  ...rest: any[]
) => Paginator<ListFleetMembersCommandOutput> = createPaginator<
  DeadlinePaginationConfiguration,
  ListFleetMembersCommandInput,
  ListFleetMembersCommandOutput
>(DeadlineClient, ListFleetMembersCommand, "nextToken", "nextToken", "maxResults");
