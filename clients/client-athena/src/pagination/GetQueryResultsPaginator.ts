// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AthenaClient } from "../AthenaClient";
import {
  GetQueryResultsCommand,
  GetQueryResultsCommandInput,
  GetQueryResultsCommandOutput,
} from "../commands/GetQueryResultsCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetQueryResults: (
  config: AthenaPaginationConfiguration,
  input: GetQueryResultsCommandInput,
  ...rest: any[]
) => Paginator<GetQueryResultsCommandOutput> = createPaginator<
  AthenaPaginationConfiguration,
  GetQueryResultsCommandInput,
  GetQueryResultsCommandOutput
>(AthenaClient, GetQueryResultsCommand, "NextToken", "NextToken", "MaxResults");
