// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFormationClient } from "../CloudFormationClient";
import {
  ListStackSetsCommand,
  ListStackSetsCommandInput,
  ListStackSetsCommandOutput,
} from "../commands/ListStackSetsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStackSets: (
  config: CloudFormationPaginationConfiguration,
  input: ListStackSetsCommandInput,
  ...rest: any[]
) => Paginator<ListStackSetsCommandOutput> = createPaginator<
  CloudFormationPaginationConfiguration,
  ListStackSetsCommandInput,
  ListStackSetsCommandOutput
>(CloudFormationClient, ListStackSetsCommand, "NextToken", "NextToken", "MaxResults");
