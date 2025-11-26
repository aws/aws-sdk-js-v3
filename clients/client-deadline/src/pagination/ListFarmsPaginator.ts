// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListFarmsCommand, ListFarmsCommandInput, ListFarmsCommandOutput } from "../commands/ListFarmsCommand";
import { DeadlineClient } from "../DeadlineClient";
import { DeadlinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFarms: (
  config: DeadlinePaginationConfiguration,
  input: ListFarmsCommandInput,
  ...rest: any[]
) => Paginator<ListFarmsCommandOutput> = createPaginator<
  DeadlinePaginationConfiguration,
  ListFarmsCommandInput,
  ListFarmsCommandOutput
>(DeadlineClient, ListFarmsCommand, "nextToken", "nextToken", "maxResults");
