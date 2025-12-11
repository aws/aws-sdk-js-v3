// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetUserDefinedFunctionsCommand,
  GetUserDefinedFunctionsCommandInput,
  GetUserDefinedFunctionsCommandOutput,
} from "../commands/GetUserDefinedFunctionsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetUserDefinedFunctions: (
  config: GluePaginationConfiguration,
  input: GetUserDefinedFunctionsCommandInput,
  ...rest: any[]
) => Paginator<GetUserDefinedFunctionsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  GetUserDefinedFunctionsCommandInput,
  GetUserDefinedFunctionsCommandOutput
>(GlueClient, GetUserDefinedFunctionsCommand, "NextToken", "NextToken", "MaxResults");
