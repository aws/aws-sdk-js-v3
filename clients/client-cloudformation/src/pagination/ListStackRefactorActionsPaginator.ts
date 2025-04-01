// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { CloudFormationClient } from "../CloudFormationClient";
import {
  ListStackRefactorActionsCommand,
  ListStackRefactorActionsCommandInput,
  ListStackRefactorActionsCommandOutput,
} from "../commands/ListStackRefactorActionsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStackRefactorActions: (
  config: CloudFormationPaginationConfiguration,
  input: ListStackRefactorActionsCommandInput,
  ...rest: any[]
) => Paginator<ListStackRefactorActionsCommandOutput> = createPaginator<
  CloudFormationPaginationConfiguration,
  ListStackRefactorActionsCommandInput,
  ListStackRefactorActionsCommandOutput
>(CloudFormationClient, ListStackRefactorActionsCommand, "NextToken", "NextToken", "MaxResults");
