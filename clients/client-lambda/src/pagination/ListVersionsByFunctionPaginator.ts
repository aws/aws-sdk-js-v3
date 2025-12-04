// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListVersionsByFunctionCommand,
  ListVersionsByFunctionCommandInput,
  ListVersionsByFunctionCommandOutput,
} from "../commands/ListVersionsByFunctionCommand";
import { LambdaClient } from "../LambdaClient";
import { LambdaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVersionsByFunction: (
  config: LambdaPaginationConfiguration,
  input: ListVersionsByFunctionCommandInput,
  ...rest: any[]
) => Paginator<ListVersionsByFunctionCommandOutput> = createPaginator<
  LambdaPaginationConfiguration,
  ListVersionsByFunctionCommandInput,
  ListVersionsByFunctionCommandOutput
>(LambdaClient, ListVersionsByFunctionCommand, "Marker", "NextMarker", "MaxItems");
