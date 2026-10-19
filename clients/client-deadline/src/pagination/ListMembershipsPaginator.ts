// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMembershipsCommand,
  ListMembershipsCommandInput,
  ListMembershipsCommandOutput,
} from "../commands/ListMembershipsCommand";
import { DeadlineClient } from "../DeadlineClient";
import type { DeadlinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMemberships: (
  config: DeadlinePaginationConfiguration,
  input: ListMembershipsCommandInput,
  ...rest: any[]
) => Paginator<ListMembershipsCommandOutput> = createPaginator<
  DeadlinePaginationConfiguration,
  ListMembershipsCommandInput,
  ListMembershipsCommandOutput
>(DeadlineClient, ListMembershipsCommand, "nextToken", "nextToken", "maxResults");
