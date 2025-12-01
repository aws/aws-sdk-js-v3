// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListExtensibleSourceServersCommand,
  ListExtensibleSourceServersCommandInput,
  ListExtensibleSourceServersCommandOutput,
} from "../commands/ListExtensibleSourceServersCommand";
import { DrsClient } from "../DrsClient";
import { DrsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExtensibleSourceServers: (
  config: DrsPaginationConfiguration,
  input: ListExtensibleSourceServersCommandInput,
  ...rest: any[]
) => Paginator<ListExtensibleSourceServersCommandOutput> = createPaginator<
  DrsPaginationConfiguration,
  ListExtensibleSourceServersCommandInput,
  ListExtensibleSourceServersCommandOutput
>(DrsClient, ListExtensibleSourceServersCommand, "nextToken", "nextToken", "maxResults");
