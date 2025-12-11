// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListStatementsCommand,
  ListStatementsCommandInput,
  ListStatementsCommandOutput,
} from "../commands/ListStatementsCommand";
import { RedshiftDataClient } from "../RedshiftDataClient";
import { RedshiftDataPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStatements: (
  config: RedshiftDataPaginationConfiguration,
  input: ListStatementsCommandInput,
  ...rest: any[]
) => Paginator<ListStatementsCommandOutput> = createPaginator<
  RedshiftDataPaginationConfiguration,
  ListStatementsCommandInput,
  ListStatementsCommandOutput
>(RedshiftDataClient, ListStatementsCommand, "NextToken", "NextToken", "MaxResults");
