// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEvaluationFormAIVersionsCommand,
  ListEvaluationFormAIVersionsCommandInput,
  ListEvaluationFormAIVersionsCommandOutput,
} from "../commands/ListEvaluationFormAIVersionsCommand";
import { ConnectClient } from "../ConnectClient";
import type { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEvaluationFormAIVersions: (
  config: ConnectPaginationConfiguration,
  input: ListEvaluationFormAIVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListEvaluationFormAIVersionsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListEvaluationFormAIVersionsCommandInput,
  ListEvaluationFormAIVersionsCommandOutput
>(ConnectClient, ListEvaluationFormAIVersionsCommand, "NextToken", "NextToken", "MaxResults");
