// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFunctionEventInvokeConfigsCommand,
  ListFunctionEventInvokeConfigsCommandInput,
  ListFunctionEventInvokeConfigsCommandOutput,
} from "../commands/ListFunctionEventInvokeConfigsCommand";
import { LambdaClient } from "../LambdaClient";
import { LambdaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFunctionEventInvokeConfigs: (
  config: LambdaPaginationConfiguration,
  input: ListFunctionEventInvokeConfigsCommandInput,
  ...rest: any[]
) => Paginator<ListFunctionEventInvokeConfigsCommandOutput> = createPaginator<
  LambdaPaginationConfiguration,
  ListFunctionEventInvokeConfigsCommandInput,
  ListFunctionEventInvokeConfigsCommandOutput
>(LambdaClient, ListFunctionEventInvokeConfigsCommand, "Marker", "NextMarker", "MaxItems");
