// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRunCachesCommand,
  ListRunCachesCommandInput,
  ListRunCachesCommandOutput,
} from "../commands/ListRunCachesCommand";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRunCaches: (
  config: OmicsPaginationConfiguration,
  input: ListRunCachesCommandInput,
  ...rest: any[]
) => Paginator<ListRunCachesCommandOutput> = createPaginator<
  OmicsPaginationConfiguration,
  ListRunCachesCommandInput,
  ListRunCachesCommandOutput
>(OmicsClient, ListRunCachesCommand, "startingToken", "nextToken", "maxResults");
