// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEvaluationFormVersionsCommand,
  ListEvaluationFormVersionsCommandInput,
  ListEvaluationFormVersionsCommandOutput,
} from "../commands/ListEvaluationFormVersionsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEvaluationFormVersions: (
  config: ConnectPaginationConfiguration,
  input: ListEvaluationFormVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListEvaluationFormVersionsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListEvaluationFormVersionsCommandInput,
  ListEvaluationFormVersionsCommandOutput
>(ConnectClient, ListEvaluationFormVersionsCommand, "NextToken", "NextToken", "MaxResults");
