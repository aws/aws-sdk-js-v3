// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFormationClient } from "../CloudFormationClient";
import {
  ListStackSetOperationResultsCommand,
  ListStackSetOperationResultsCommandInput,
  ListStackSetOperationResultsCommandOutput,
} from "../commands/ListStackSetOperationResultsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStackSetOperationResults: (
  config: CloudFormationPaginationConfiguration,
  input: ListStackSetOperationResultsCommandInput,
  ...rest: any[]
) => Paginator<ListStackSetOperationResultsCommandOutput> = createPaginator<
  CloudFormationPaginationConfiguration,
  ListStackSetOperationResultsCommandInput,
  ListStackSetOperationResultsCommandOutput
>(CloudFormationClient, ListStackSetOperationResultsCommand, "NextToken", "NextToken", "MaxResults");
