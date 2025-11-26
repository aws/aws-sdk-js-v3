// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetResourceSharesCommand,
  GetResourceSharesCommandInput,
  GetResourceSharesCommandOutput,
} from "../commands/GetResourceSharesCommand";
import { RAMClient } from "../RAMClient";
import { RAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetResourceShares: (
  config: RAMPaginationConfiguration,
  input: GetResourceSharesCommandInput,
  ...rest: any[]
) => Paginator<GetResourceSharesCommandOutput> = createPaginator<
  RAMPaginationConfiguration,
  GetResourceSharesCommandInput,
  GetResourceSharesCommandOutput
>(RAMClient, GetResourceSharesCommand, "nextToken", "nextToken", "maxResults");
