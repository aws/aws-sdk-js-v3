// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFormationClient } from "../CloudFormationClient";
import { ListStacksCommand, ListStacksCommandInput, ListStacksCommandOutput } from "../commands/ListStacksCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStacks: (
  config: CloudFormationPaginationConfiguration,
  input: ListStacksCommandInput,
  ...rest: any[]
) => Paginator<ListStacksCommandOutput> = createPaginator<
  CloudFormationPaginationConfiguration,
  ListStacksCommandInput,
  ListStacksCommandOutput
>(CloudFormationClient, ListStacksCommand, "NextToken", "NextToken", "");
