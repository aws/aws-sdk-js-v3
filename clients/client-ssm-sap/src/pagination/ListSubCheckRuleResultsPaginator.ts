// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSubCheckRuleResultsCommand,
  ListSubCheckRuleResultsCommandInput,
  ListSubCheckRuleResultsCommandOutput,
} from "../commands/ListSubCheckRuleResultsCommand";
import { SsmSapClient } from "../SsmSapClient";
import { SsmSapPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSubCheckRuleResults: (
  config: SsmSapPaginationConfiguration,
  input: ListSubCheckRuleResultsCommandInput,
  ...rest: any[]
) => Paginator<ListSubCheckRuleResultsCommandOutput> = createPaginator<
  SsmSapPaginationConfiguration,
  ListSubCheckRuleResultsCommandInput,
  ListSubCheckRuleResultsCommandOutput
>(SsmSapClient, ListSubCheckRuleResultsCommand, "NextToken", "NextToken", "MaxResults");
