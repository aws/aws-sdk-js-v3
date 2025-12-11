// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetStatementResultCommand,
  GetStatementResultCommandInput,
  GetStatementResultCommandOutput,
} from "../commands/GetStatementResultCommand";
import { RedshiftDataClient } from "../RedshiftDataClient";
import { RedshiftDataPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetStatementResult: (
  config: RedshiftDataPaginationConfiguration,
  input: GetStatementResultCommandInput,
  ...rest: any[]
) => Paginator<GetStatementResultCommandOutput> = createPaginator<
  RedshiftDataPaginationConfiguration,
  GetStatementResultCommandInput,
  GetStatementResultCommandOutput
>(RedshiftDataClient, GetStatementResultCommand, "NextToken", "NextToken", "");
