// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListContextStoreAssociationsCommand,
  ListContextStoreAssociationsCommandInput,
  ListContextStoreAssociationsCommandOutput,
} from "../commands/ListContextStoreAssociationsCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import type { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContextStoreAssociations: (
  config: NetworkManagerPaginationConfiguration,
  input: ListContextStoreAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListContextStoreAssociationsCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  ListContextStoreAssociationsCommandInput,
  ListContextStoreAssociationsCommandOutput
>(NetworkManagerClient, ListContextStoreAssociationsCommand, "NextToken", "NextToken", "MaxResults");
