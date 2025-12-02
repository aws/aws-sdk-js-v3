// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  GetDurableExecutionStateCommand,
  GetDurableExecutionStateCommandInput,
  GetDurableExecutionStateCommandOutput,
} from "../commands/GetDurableExecutionStateCommand";
import { LambdaClient } from "../LambdaClient";
import { LambdaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetDurableExecutionState: (
  config: LambdaPaginationConfiguration,
  input: GetDurableExecutionStateCommandInput,
  ...rest: any[]
) => Paginator<GetDurableExecutionStateCommandOutput> = createPaginator<
  LambdaPaginationConfiguration,
  GetDurableExecutionStateCommandInput,
  GetDurableExecutionStateCommandOutput
>(LambdaClient, GetDurableExecutionStateCommand, "Marker", "NextMarker", "MaxItems");
