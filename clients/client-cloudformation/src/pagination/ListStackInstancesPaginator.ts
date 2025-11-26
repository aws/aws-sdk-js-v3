// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFormationClient } from "../CloudFormationClient";
import {
  ListStackInstancesCommand,
  ListStackInstancesCommandInput,
  ListStackInstancesCommandOutput,
} from "../commands/ListStackInstancesCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStackInstances: (
  config: CloudFormationPaginationConfiguration,
  input: ListStackInstancesCommandInput,
  ...rest: any[]
) => Paginator<ListStackInstancesCommandOutput> = createPaginator<
  CloudFormationPaginationConfiguration,
  ListStackInstancesCommandInput,
  ListStackInstancesCommandOutput
>(CloudFormationClient, ListStackInstancesCommand, "NextToken", "NextToken", "MaxResults");
