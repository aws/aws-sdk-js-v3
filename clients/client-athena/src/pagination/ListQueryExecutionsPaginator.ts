// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AthenaClient } from "../AthenaClient";
import {
  ListQueryExecutionsCommand,
  ListQueryExecutionsCommandInput,
  ListQueryExecutionsCommandOutput,
} from "../commands/ListQueryExecutionsCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListQueryExecutions: (
  config: AthenaPaginationConfiguration,
  input: ListQueryExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListQueryExecutionsCommandOutput> = createPaginator<
  AthenaPaginationConfiguration,
  ListQueryExecutionsCommandInput,
  ListQueryExecutionsCommandOutput
>(AthenaClient, ListQueryExecutionsCommand, "NextToken", "NextToken", "MaxResults");
