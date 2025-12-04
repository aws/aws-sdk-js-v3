// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListStepConsumersCommand,
  ListStepConsumersCommandInput,
  ListStepConsumersCommandOutput,
} from "../commands/ListStepConsumersCommand";
import { DeadlineClient } from "../DeadlineClient";
import { DeadlinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStepConsumers: (
  config: DeadlinePaginationConfiguration,
  input: ListStepConsumersCommandInput,
  ...rest: any[]
) => Paginator<ListStepConsumersCommandOutput> = createPaginator<
  DeadlinePaginationConfiguration,
  ListStepConsumersCommandInput,
  ListStepConsumersCommandOutput
>(DeadlineClient, ListStepConsumersCommand, "nextToken", "nextToken", "maxResults");
