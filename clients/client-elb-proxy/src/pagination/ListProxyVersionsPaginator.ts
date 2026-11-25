// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProxyVersionsCommand,
  ListProxyVersionsCommandInput,
  ListProxyVersionsCommandOutput,
} from "../commands/ListProxyVersionsCommand";
import { ELBProxyClient } from "../ELBProxyClient";
import type { ELBProxyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProxyVersions: (
  config: ELBProxyPaginationConfiguration,
  input: ListProxyVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListProxyVersionsCommandOutput> = createPaginator<
  ELBProxyPaginationConfiguration,
  ListProxyVersionsCommandInput,
  ListProxyVersionsCommandOutput
>(ELBProxyClient, ListProxyVersionsCommand, "nextToken", "nextToken", "maxResults");
