// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccessesCommand,
  ListAccessesCommandInput,
  ListAccessesCommandOutput,
} from "../commands/ListAccessesCommand";
import { TransferClient } from "../TransferClient";
import { TransferPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccesses: (
  config: TransferPaginationConfiguration,
  input: ListAccessesCommandInput,
  ...rest: any[]
) => Paginator<ListAccessesCommandOutput> = createPaginator<
  TransferPaginationConfiguration,
  ListAccessesCommandInput,
  ListAccessesCommandOutput
>(TransferClient, ListAccessesCommand, "NextToken", "NextToken", "MaxResults");
