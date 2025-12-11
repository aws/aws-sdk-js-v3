// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFormationClient } from "../CloudFormationClient";
import { ListImportsCommand, ListImportsCommandInput, ListImportsCommandOutput } from "../commands/ListImportsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListImports: (
  config: CloudFormationPaginationConfiguration,
  input: ListImportsCommandInput,
  ...rest: any[]
) => Paginator<ListImportsCommandOutput> = createPaginator<
  CloudFormationPaginationConfiguration,
  ListImportsCommandInput,
  ListImportsCommandOutput
>(CloudFormationClient, ListImportsCommand, "NextToken", "NextToken", "");
