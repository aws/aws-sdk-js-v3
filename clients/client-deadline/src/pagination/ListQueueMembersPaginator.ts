// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListQueueMembersCommand,
  ListQueueMembersCommandInput,
  ListQueueMembersCommandOutput,
} from "../commands/ListQueueMembersCommand";
import { DeadlineClient } from "../DeadlineClient";
import { DeadlinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListQueueMembers: (
  config: DeadlinePaginationConfiguration,
  input: ListQueueMembersCommandInput,
  ...rest: any[]
) => Paginator<ListQueueMembersCommandOutput> = createPaginator<
  DeadlinePaginationConfiguration,
  ListQueueMembersCommandInput,
  ListQueueMembersCommandOutput
>(DeadlineClient, ListQueueMembersCommand, "nextToken", "nextToken", "maxResults");
