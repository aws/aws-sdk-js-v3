// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFunctionsByCodeSigningConfigCommand,
  ListFunctionsByCodeSigningConfigCommandInput,
  ListFunctionsByCodeSigningConfigCommandOutput,
} from "../commands/ListFunctionsByCodeSigningConfigCommand";
import { LambdaClient } from "../LambdaClient";
import { LambdaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFunctionsByCodeSigningConfig: (
  config: LambdaPaginationConfiguration,
  input: ListFunctionsByCodeSigningConfigCommandInput,
  ...rest: any[]
) => Paginator<ListFunctionsByCodeSigningConfigCommandOutput> = createPaginator<
  LambdaPaginationConfiguration,
  ListFunctionsByCodeSigningConfigCommandInput,
  ListFunctionsByCodeSigningConfigCommandOutput
>(LambdaClient, ListFunctionsByCodeSigningConfigCommand, "Marker", "NextMarker", "MaxItems");
