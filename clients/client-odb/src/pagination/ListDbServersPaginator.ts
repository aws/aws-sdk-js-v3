// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListDbServersCommand,
  ListDbServersCommandInput,
  ListDbServersCommandOutput,
} from "../commands/ListDbServersCommand";
import { OdbClient } from "../OdbClient";
import { OdbPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDbServers: (
  config: OdbPaginationConfiguration,
  input: ListDbServersCommandInput,
  ...rest: any[]
) => Paginator<ListDbServersCommandOutput> = createPaginator<
  OdbPaginationConfiguration,
  ListDbServersCommandInput,
  ListDbServersCommandOutput
>(OdbClient, ListDbServersCommand, "nextToken", "nextToken", "maxResults");
