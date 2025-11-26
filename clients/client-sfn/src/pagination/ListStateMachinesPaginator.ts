// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListStateMachinesCommand,
  ListStateMachinesCommandInput,
  ListStateMachinesCommandOutput,
} from "../commands/ListStateMachinesCommand";
import { SFNClient } from "../SFNClient";
import { SFNPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStateMachines: (
  config: SFNPaginationConfiguration,
  input: ListStateMachinesCommandInput,
  ...rest: any[]
) => Paginator<ListStateMachinesCommandOutput> = createPaginator<
  SFNPaginationConfiguration,
  ListStateMachinesCommandInput,
  ListStateMachinesCommandOutput
>(SFNClient, ListStateMachinesCommand, "nextToken", "nextToken", "maxResults");
