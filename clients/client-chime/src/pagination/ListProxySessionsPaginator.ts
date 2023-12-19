// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ChimeClient } from "../ChimeClient";
import {
  ListProxySessionsCommand,
  ListProxySessionsCommandInput,
  ListProxySessionsCommandOutput,
} from "../commands/ListProxySessionsCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProxySessions: (
  config: ChimePaginationConfiguration,
  input: ListProxySessionsCommandInput,
  ...rest: any[]
) => Paginator<ListProxySessionsCommandOutput> = createPaginator<
  ChimePaginationConfiguration,
  ListProxySessionsCommandInput,
  ListProxySessionsCommandOutput
>(ChimeClient, ListProxySessionsCommand, "NextToken", "NextToken", "MaxResults");
