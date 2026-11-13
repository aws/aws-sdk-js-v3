// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRuntimeVersionsCommand,
  ListRuntimeVersionsCommandInput,
  ListRuntimeVersionsCommandOutput,
} from "../commands/ListRuntimeVersionsCommand";
import { LambdaCoreClient } from "../LambdaCoreClient";
import type { LambdaCorePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRuntimeVersions: (
  config: LambdaCorePaginationConfiguration,
  input: ListRuntimeVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListRuntimeVersionsCommandOutput> = createPaginator<
  LambdaCorePaginationConfiguration,
  ListRuntimeVersionsCommandInput,
  ListRuntimeVersionsCommandOutput
>(LambdaCoreClient, ListRuntimeVersionsCommand, "NextToken", "NextToken", "MaxResults");
