// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSessionActionsCommand,
  ListSessionActionsCommandInput,
  ListSessionActionsCommandOutput,
} from "../commands/ListSessionActionsCommand";
import { DeadlineClient } from "../DeadlineClient";
import { DeadlinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSessionActions: (
  config: DeadlinePaginationConfiguration,
  input: ListSessionActionsCommandInput,
  ...rest: any[]
) => Paginator<ListSessionActionsCommandOutput> = createPaginator<
  DeadlinePaginationConfiguration,
  ListSessionActionsCommandInput,
  ListSessionActionsCommandOutput
>(DeadlineClient, ListSessionActionsCommand, "nextToken", "nextToken", "maxResults");
