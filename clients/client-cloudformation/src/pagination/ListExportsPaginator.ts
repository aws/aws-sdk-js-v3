// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFormationClient } from "../CloudFormationClient";
import { ListExportsCommand, ListExportsCommandInput, ListExportsCommandOutput } from "../commands/ListExportsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExports: (
  config: CloudFormationPaginationConfiguration,
  input: ListExportsCommandInput,
  ...rest: any[]
) => Paginator<ListExportsCommandOutput> = createPaginator<
  CloudFormationPaginationConfiguration,
  ListExportsCommandInput,
  ListExportsCommandOutput
>(CloudFormationClient, ListExportsCommand, "NextToken", "NextToken", "");
