// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOpsItemRelatedItemsCommand,
  ListOpsItemRelatedItemsCommandInput,
  ListOpsItemRelatedItemsCommandOutput,
} from "../commands/ListOpsItemRelatedItemsCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOpsItemRelatedItems: (
  config: SSMPaginationConfiguration,
  input: ListOpsItemRelatedItemsCommandInput,
  ...rest: any[]
) => Paginator<ListOpsItemRelatedItemsCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  ListOpsItemRelatedItemsCommandInput,
  ListOpsItemRelatedItemsCommandOutput
>(SSMClient, ListOpsItemRelatedItemsCommand, "NextToken", "NextToken", "MaxResults");
