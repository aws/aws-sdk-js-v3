// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFunctionsCommand,
  ListFunctionsCommandInput,
  ListFunctionsCommandOutput,
} from "../commands/ListFunctionsCommand";
import { MediaTailorClient } from "../MediaTailorClient";
import type { MediaTailorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFunctions: (
  config: MediaTailorPaginationConfiguration,
  input: ListFunctionsCommandInput,
  ...rest: any[]
) => Paginator<ListFunctionsCommandOutput> = createPaginator<
  MediaTailorPaginationConfiguration,
  ListFunctionsCommandInput,
  ListFunctionsCommandOutput
>(MediaTailorClient, ListFunctionsCommand, "NextToken", "NextToken", "MaxResults");
