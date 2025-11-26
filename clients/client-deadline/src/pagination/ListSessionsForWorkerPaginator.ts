// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSessionsForWorkerCommand,
  ListSessionsForWorkerCommandInput,
  ListSessionsForWorkerCommandOutput,
} from "../commands/ListSessionsForWorkerCommand";
import { DeadlineClient } from "../DeadlineClient";
import { DeadlinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSessionsForWorker: (
  config: DeadlinePaginationConfiguration,
  input: ListSessionsForWorkerCommandInput,
  ...rest: any[]
) => Paginator<ListSessionsForWorkerCommandOutput> = createPaginator<
  DeadlinePaginationConfiguration,
  ListSessionsForWorkerCommandInput,
  ListSessionsForWorkerCommandOutput
>(DeadlineClient, ListSessionsForWorkerCommand, "nextToken", "nextToken", "maxResults");
