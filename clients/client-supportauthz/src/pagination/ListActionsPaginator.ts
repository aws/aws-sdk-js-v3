// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListActionsCommand, ListActionsCommandInput, ListActionsCommandOutput } from "../commands/ListActionsCommand";
import { SupportAuthZClient } from "../SupportAuthZClient";
import type { SupportAuthZPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListActions: (
  config: SupportAuthZPaginationConfiguration,
  input: ListActionsCommandInput,
  ...rest: any[]
) => Paginator<ListActionsCommandOutput> = createPaginator<
  SupportAuthZPaginationConfiguration,
  ListActionsCommandInput,
  ListActionsCommandOutput
>(SupportAuthZClient, ListActionsCommand, "nextToken", "nextToken", "maxResults");
