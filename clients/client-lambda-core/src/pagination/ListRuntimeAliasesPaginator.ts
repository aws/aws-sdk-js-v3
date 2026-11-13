// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRuntimeAliasesCommand,
  ListRuntimeAliasesCommandInput,
  ListRuntimeAliasesCommandOutput,
} from "../commands/ListRuntimeAliasesCommand";
import { LambdaCoreClient } from "../LambdaCoreClient";
import type { LambdaCorePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRuntimeAliases: (
  config: LambdaCorePaginationConfiguration,
  input: ListRuntimeAliasesCommandInput,
  ...rest: any[]
) => Paginator<ListRuntimeAliasesCommandOutput> = createPaginator<
  LambdaCorePaginationConfiguration,
  ListRuntimeAliasesCommandInput,
  ListRuntimeAliasesCommandOutput
>(LambdaCoreClient, ListRuntimeAliasesCommand, "NextToken", "NextToken", "MaxResults");
