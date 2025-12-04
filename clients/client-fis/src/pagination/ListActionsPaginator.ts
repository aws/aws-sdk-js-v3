// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListActionsCommand, ListActionsCommandInput, ListActionsCommandOutput } from "../commands/ListActionsCommand";
import { FisClient } from "../FisClient";
import { FisPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListActions: (
  config: FisPaginationConfiguration,
  input: ListActionsCommandInput,
  ...rest: any[]
) => Paginator<ListActionsCommandOutput> = createPaginator<
  FisPaginationConfiguration,
  ListActionsCommandInput,
  ListActionsCommandOutput
>(FisClient, ListActionsCommand, "nextToken", "nextToken", "maxResults");
