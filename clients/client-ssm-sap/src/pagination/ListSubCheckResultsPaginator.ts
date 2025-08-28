// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListSubCheckResultsCommand,
  ListSubCheckResultsCommandInput,
  ListSubCheckResultsCommandOutput,
} from "../commands/ListSubCheckResultsCommand";
import { SsmSapClient } from "../SsmSapClient";
import { SsmSapPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSubCheckResults: (
  config: SsmSapPaginationConfiguration,
  input: ListSubCheckResultsCommandInput,
  ...rest: any[]
) => Paginator<ListSubCheckResultsCommandOutput> = createPaginator<
  SsmSapPaginationConfiguration,
  ListSubCheckResultsCommandInput,
  ListSubCheckResultsCommandOutput
>(SsmSapClient, ListSubCheckResultsCommand, "NextToken", "NextToken", "MaxResults");
