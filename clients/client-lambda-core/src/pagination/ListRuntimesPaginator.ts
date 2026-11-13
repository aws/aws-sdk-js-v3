// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRuntimesCommand,
  ListRuntimesCommandInput,
  ListRuntimesCommandOutput,
} from "../commands/ListRuntimesCommand";
import { LambdaCoreClient } from "../LambdaCoreClient";
import type { LambdaCorePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRuntimes: (
  config: LambdaCorePaginationConfiguration,
  input: ListRuntimesCommandInput,
  ...rest: any[]
) => Paginator<ListRuntimesCommandOutput> = createPaginator<
  LambdaCorePaginationConfiguration,
  ListRuntimesCommandInput,
  ListRuntimesCommandOutput
>(LambdaCoreClient, ListRuntimesCommand, "NextToken", "NextToken", "MaxResults");
