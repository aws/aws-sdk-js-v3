// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetInventoryCommand,
  GetInventoryCommandInput,
  GetInventoryCommandOutput,
} from "../commands/GetInventoryCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetInventory: (
  config: SSMPaginationConfiguration,
  input: GetInventoryCommandInput,
  ...rest: any[]
) => Paginator<GetInventoryCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  GetInventoryCommandInput,
  GetInventoryCommandOutput
>(SSMClient, GetInventoryCommand, "NextToken", "NextToken", "MaxResults");
