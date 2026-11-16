// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListContextChangesCommand,
  ListContextChangesCommandInput,
  ListContextChangesCommandOutput,
} from "../commands/ListContextChangesCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import type { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContextChanges: (
  config: NetworkManagerPaginationConfiguration,
  input: ListContextChangesCommandInput,
  ...rest: any[]
) => Paginator<ListContextChangesCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  ListContextChangesCommandInput,
  ListContextChangesCommandOutput
>(NetworkManagerClient, ListContextChangesCommand, "NextToken", "NextToken", "MaxResults");
