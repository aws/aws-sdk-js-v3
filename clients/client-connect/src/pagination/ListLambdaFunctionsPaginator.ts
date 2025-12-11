// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLambdaFunctionsCommand,
  ListLambdaFunctionsCommandInput,
  ListLambdaFunctionsCommandOutput,
} from "../commands/ListLambdaFunctionsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLambdaFunctions: (
  config: ConnectPaginationConfiguration,
  input: ListLambdaFunctionsCommandInput,
  ...rest: any[]
) => Paginator<ListLambdaFunctionsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListLambdaFunctionsCommandInput,
  ListLambdaFunctionsCommandOutput
>(ConnectClient, ListLambdaFunctionsCommand, "NextToken", "NextToken", "MaxResults");
