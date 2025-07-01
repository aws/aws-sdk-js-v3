// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListGiVersionsCommand,
  ListGiVersionsCommandInput,
  ListGiVersionsCommandOutput,
} from "../commands/ListGiVersionsCommand";
import { OdbClient } from "../OdbClient";
import { OdbPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGiVersions: (
  config: OdbPaginationConfiguration,
  input: ListGiVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListGiVersionsCommandOutput> = createPaginator<
  OdbPaginationConfiguration,
  ListGiVersionsCommandInput,
  ListGiVersionsCommandOutput
>(OdbClient, ListGiVersionsCommand, "nextToken", "nextToken", "maxResults");
