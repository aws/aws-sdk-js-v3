// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFormationClient } from "../CloudFormationClient";
import {
  ListStackSetOperationsCommand,
  ListStackSetOperationsCommandInput,
  ListStackSetOperationsCommandOutput,
} from "../commands/ListStackSetOperationsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStackSetOperations: (
  config: CloudFormationPaginationConfiguration,
  input: ListStackSetOperationsCommandInput,
  ...rest: any[]
) => Paginator<ListStackSetOperationsCommandOutput> = createPaginator<
  CloudFormationPaginationConfiguration,
  ListStackSetOperationsCommandInput,
  ListStackSetOperationsCommandOutput
>(CloudFormationClient, ListStackSetOperationsCommand, "NextToken", "NextToken", "MaxResults");
