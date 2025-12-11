// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFlywheelIterationHistoryCommand,
  ListFlywheelIterationHistoryCommandInput,
  ListFlywheelIterationHistoryCommandOutput,
} from "../commands/ListFlywheelIterationHistoryCommand";
import { ComprehendClient } from "../ComprehendClient";
import { ComprehendPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFlywheelIterationHistory: (
  config: ComprehendPaginationConfiguration,
  input: ListFlywheelIterationHistoryCommandInput,
  ...rest: any[]
) => Paginator<ListFlywheelIterationHistoryCommandOutput> = createPaginator<
  ComprehendPaginationConfiguration,
  ListFlywheelIterationHistoryCommandInput,
  ListFlywheelIterationHistoryCommandOutput
>(ComprehendClient, ListFlywheelIterationHistoryCommand, "NextToken", "NextToken", "MaxResults");
