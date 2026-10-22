// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCodeScansCommand,
  ListCodeScansCommandInput,
  ListCodeScansCommandOutput,
} from "../commands/ListCodeScansCommand";
import { ContinuumClient } from "../ContinuumClient";
import type { ContinuumPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCodeScans: (
  config: ContinuumPaginationConfiguration,
  input: ListCodeScansCommandInput,
  ...rest: any[]
) => Paginator<ListCodeScansCommandOutput> = createPaginator<
  ContinuumPaginationConfiguration,
  ListCodeScansCommandInput,
  ListCodeScansCommandOutput
>(ContinuumClient, ListCodeScansCommand, "nextToken", "nextToken", "maxResults");
