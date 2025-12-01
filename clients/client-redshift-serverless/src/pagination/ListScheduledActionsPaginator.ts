// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListScheduledActionsCommand,
  ListScheduledActionsCommandInput,
  ListScheduledActionsCommandOutput,
} from "../commands/ListScheduledActionsCommand";
import { RedshiftServerlessClient } from "../RedshiftServerlessClient";
import { RedshiftServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListScheduledActions: (
  config: RedshiftServerlessPaginationConfiguration,
  input: ListScheduledActionsCommandInput,
  ...rest: any[]
) => Paginator<ListScheduledActionsCommandOutput> = createPaginator<
  RedshiftServerlessPaginationConfiguration,
  ListScheduledActionsCommandInput,
  ListScheduledActionsCommandOutput
>(RedshiftServerlessClient, ListScheduledActionsCommand, "nextToken", "nextToken", "maxResults");
