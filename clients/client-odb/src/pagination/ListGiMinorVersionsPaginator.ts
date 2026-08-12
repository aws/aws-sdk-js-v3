// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGiMinorVersionsCommand,
  ListGiMinorVersionsCommandInput,
  ListGiMinorVersionsCommandOutput,
} from "../commands/ListGiMinorVersionsCommand";
import { OdbClient } from "../OdbClient";
import type { OdbPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGiMinorVersions: (
  config: OdbPaginationConfiguration,
  input: ListGiMinorVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListGiMinorVersionsCommandOutput> = createPaginator<
  OdbPaginationConfiguration,
  ListGiMinorVersionsCommandInput,
  ListGiMinorVersionsCommandOutput
>(OdbClient, ListGiMinorVersionsCommand, "nextToken", "nextToken", "maxResults");
