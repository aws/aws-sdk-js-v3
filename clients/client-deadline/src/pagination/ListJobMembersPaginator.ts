// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListJobMembersCommand,
  ListJobMembersCommandInput,
  ListJobMembersCommandOutput,
} from "../commands/ListJobMembersCommand";
import { DeadlineClient } from "../DeadlineClient";
import { DeadlinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListJobMembers: (
  config: DeadlinePaginationConfiguration,
  input: ListJobMembersCommandInput,
  ...rest: any[]
) => Paginator<ListJobMembersCommandOutput> = createPaginator<
  DeadlinePaginationConfiguration,
  ListJobMembersCommandInput,
  ListJobMembersCommandOutput
>(DeadlineClient, ListJobMembersCommand, "nextToken", "nextToken", "maxResults");
