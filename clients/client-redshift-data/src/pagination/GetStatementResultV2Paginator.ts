// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetStatementResultV2Command,
  GetStatementResultV2CommandInput,
  GetStatementResultV2CommandOutput,
} from "../commands/GetStatementResultV2Command";
import { RedshiftDataClient } from "../RedshiftDataClient";
import { RedshiftDataPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetStatementResultV2: (
  config: RedshiftDataPaginationConfiguration,
  input: GetStatementResultV2CommandInput,
  ...rest: any[]
) => Paginator<GetStatementResultV2CommandOutput> = createPaginator<
  RedshiftDataPaginationConfiguration,
  GetStatementResultV2CommandInput,
  GetStatementResultV2CommandOutput
>(RedshiftDataClient, GetStatementResultV2Command, "NextToken", "NextToken", "");
