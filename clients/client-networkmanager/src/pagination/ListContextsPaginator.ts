// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListContextsCommand,
  ListContextsCommandInput,
  ListContextsCommandOutput,
} from "../commands/ListContextsCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import type { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContexts: (
  config: NetworkManagerPaginationConfiguration,
  input: ListContextsCommandInput,
  ...rest: any[]
) => Paginator<ListContextsCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  ListContextsCommandInput,
  ListContextsCommandOutput
>(NetworkManagerClient, ListContextsCommand, "NextToken", "NextToken", "MaxResults");
