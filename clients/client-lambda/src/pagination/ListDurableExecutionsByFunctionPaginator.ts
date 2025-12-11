// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDurableExecutionsByFunctionCommand,
  ListDurableExecutionsByFunctionCommandInput,
  ListDurableExecutionsByFunctionCommandOutput,
} from "../commands/ListDurableExecutionsByFunctionCommand";
import { LambdaClient } from "../LambdaClient";
import { LambdaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDurableExecutionsByFunction: (
  config: LambdaPaginationConfiguration,
  input: ListDurableExecutionsByFunctionCommandInput,
  ...rest: any[]
) => Paginator<ListDurableExecutionsByFunctionCommandOutput> = createPaginator<
  LambdaPaginationConfiguration,
  ListDurableExecutionsByFunctionCommandInput,
  ListDurableExecutionsByFunctionCommandOutput
>(LambdaClient, ListDurableExecutionsByFunctionCommand, "Marker", "NextMarker", "MaxItems");
