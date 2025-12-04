// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPeeringsCommand,
  ListPeeringsCommandInput,
  ListPeeringsCommandOutput,
} from "../commands/ListPeeringsCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPeerings: (
  config: NetworkManagerPaginationConfiguration,
  input: ListPeeringsCommandInput,
  ...rest: any[]
) => Paginator<ListPeeringsCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  ListPeeringsCommandInput,
  ListPeeringsCommandOutput
>(NetworkManagerClient, ListPeeringsCommand, "NextToken", "NextToken", "MaxResults");
