// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFormationClient } from "../CloudFormationClient";
import {
  ListTypeVersionsCommand,
  ListTypeVersionsCommandInput,
  ListTypeVersionsCommandOutput,
} from "../commands/ListTypeVersionsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTypeVersions: (
  config: CloudFormationPaginationConfiguration,
  input: ListTypeVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListTypeVersionsCommandOutput> = createPaginator<
  CloudFormationPaginationConfiguration,
  ListTypeVersionsCommandInput,
  ListTypeVersionsCommandOutput
>(CloudFormationClient, ListTypeVersionsCommand, "NextToken", "NextToken", "MaxResults");
