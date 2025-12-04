// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFormationClient } from "../CloudFormationClient";
import {
  ListStackResourcesCommand,
  ListStackResourcesCommandInput,
  ListStackResourcesCommandOutput,
} from "../commands/ListStackResourcesCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStackResources: (
  config: CloudFormationPaginationConfiguration,
  input: ListStackResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListStackResourcesCommandOutput> = createPaginator<
  CloudFormationPaginationConfiguration,
  ListStackResourcesCommandInput,
  ListStackResourcesCommandOutput
>(CloudFormationClient, ListStackResourcesCommand, "NextToken", "NextToken", "");
