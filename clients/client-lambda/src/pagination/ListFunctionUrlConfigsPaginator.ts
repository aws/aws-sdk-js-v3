// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFunctionUrlConfigsCommand,
  ListFunctionUrlConfigsCommandInput,
  ListFunctionUrlConfigsCommandOutput,
} from "../commands/ListFunctionUrlConfigsCommand";
import { LambdaClient } from "../LambdaClient";
import { LambdaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFunctionUrlConfigs: (
  config: LambdaPaginationConfiguration,
  input: ListFunctionUrlConfigsCommandInput,
  ...rest: any[]
) => Paginator<ListFunctionUrlConfigsCommandOutput> = createPaginator<
  LambdaPaginationConfiguration,
  ListFunctionUrlConfigsCommandInput,
  ListFunctionUrlConfigsCommandOutput
>(LambdaClient, ListFunctionUrlConfigsCommand, "Marker", "NextMarker", "MaxItems");
