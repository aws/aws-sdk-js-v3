// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFunctionsCommand,
  ListFunctionsCommandInput,
  ListFunctionsCommandOutput,
} from "../commands/ListFunctionsCommand";
import { LambdaClient } from "../LambdaClient";
import { LambdaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFunctions: (
  config: LambdaPaginationConfiguration,
  input: ListFunctionsCommandInput,
  ...rest: any[]
) => Paginator<ListFunctionsCommandOutput> = createPaginator<
  LambdaPaginationConfiguration,
  ListFunctionsCommandInput,
  ListFunctionsCommandOutput
>(LambdaClient, ListFunctionsCommand, "Marker", "NextMarker", "MaxItems");
