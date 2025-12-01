// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRunTasksCommand,
  ListRunTasksCommandInput,
  ListRunTasksCommandOutput,
} from "../commands/ListRunTasksCommand";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRunTasks: (
  config: OmicsPaginationConfiguration,
  input: ListRunTasksCommandInput,
  ...rest: any[]
) => Paginator<ListRunTasksCommandOutput> = createPaginator<
  OmicsPaginationConfiguration,
  ListRunTasksCommandInput,
  ListRunTasksCommandOutput
>(OmicsClient, ListRunTasksCommand, "startingToken", "nextToken", "maxResults");
