// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AthenaClient } from "../AthenaClient";
import {
  ListPreparedStatementsCommand,
  ListPreparedStatementsCommandInput,
  ListPreparedStatementsCommandOutput,
} from "../commands/ListPreparedStatementsCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPreparedStatements: (
  config: AthenaPaginationConfiguration,
  input: ListPreparedStatementsCommandInput,
  ...rest: any[]
) => Paginator<ListPreparedStatementsCommandOutput> = createPaginator<
  AthenaPaginationConfiguration,
  ListPreparedStatementsCommandInput,
  ListPreparedStatementsCommandOutput
>(AthenaClient, ListPreparedStatementsCommand, "NextToken", "NextToken", "MaxResults");
