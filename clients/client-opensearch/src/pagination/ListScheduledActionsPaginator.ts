// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListScheduledActionsCommand,
  ListScheduledActionsCommandInput,
  ListScheduledActionsCommandOutput,
} from "../commands/ListScheduledActionsCommand";
import { OpenSearchClient } from "../OpenSearchClient";
import { OpenSearchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListScheduledActions: (
  config: OpenSearchPaginationConfiguration,
  input: ListScheduledActionsCommandInput,
  ...rest: any[]
) => Paginator<ListScheduledActionsCommandOutput> = createPaginator<
  OpenSearchPaginationConfiguration,
  ListScheduledActionsCommandInput,
  ListScheduledActionsCommandOutput
>(OpenSearchClient, ListScheduledActionsCommand, "NextToken", "NextToken", "MaxResults");
