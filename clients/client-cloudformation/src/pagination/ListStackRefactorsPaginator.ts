// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFormationClient } from "../CloudFormationClient";
import {
  ListStackRefactorsCommand,
  ListStackRefactorsCommandInput,
  ListStackRefactorsCommandOutput,
} from "../commands/ListStackRefactorsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStackRefactors: (
  config: CloudFormationPaginationConfiguration,
  input: ListStackRefactorsCommandInput,
  ...rest: any[]
) => Paginator<ListStackRefactorsCommandOutput> = createPaginator<
  CloudFormationPaginationConfiguration,
  ListStackRefactorsCommandInput,
  ListStackRefactorsCommandOutput
>(CloudFormationClient, ListStackRefactorsCommand, "NextToken", "NextToken", "MaxResults");
