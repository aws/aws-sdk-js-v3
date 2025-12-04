// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetResourceCollectionCommand,
  GetResourceCollectionCommandInput,
  GetResourceCollectionCommandOutput,
} from "../commands/GetResourceCollectionCommand";
import { DevOpsGuruClient } from "../DevOpsGuruClient";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetResourceCollection: (
  config: DevOpsGuruPaginationConfiguration,
  input: GetResourceCollectionCommandInput,
  ...rest: any[]
) => Paginator<GetResourceCollectionCommandOutput> = createPaginator<
  DevOpsGuruPaginationConfiguration,
  GetResourceCollectionCommandInput,
  GetResourceCollectionCommandOutput
>(DevOpsGuruClient, GetResourceCollectionCommand, "NextToken", "NextToken", "");
