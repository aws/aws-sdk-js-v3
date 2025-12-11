// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOperationsCommand,
  ListOperationsCommandInput,
  ListOperationsCommandOutput,
} from "../commands/ListOperationsCommand";
import { SsmSapClient } from "../SsmSapClient";
import { SsmSapPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOperations: (
  config: SsmSapPaginationConfiguration,
  input: ListOperationsCommandInput,
  ...rest: any[]
) => Paginator<ListOperationsCommandOutput> = createPaginator<
  SsmSapPaginationConfiguration,
  ListOperationsCommandInput,
  ListOperationsCommandOutput
>(SsmSapClient, ListOperationsCommand, "NextToken", "NextToken", "MaxResults");
