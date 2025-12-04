// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListClusterAlertsCommand,
  ListClusterAlertsCommandInput,
  ListClusterAlertsCommandOutput,
} from "../commands/ListClusterAlertsCommand";
import { MediaLiveClient } from "../MediaLiveClient";
import { MediaLivePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListClusterAlerts: (
  config: MediaLivePaginationConfiguration,
  input: ListClusterAlertsCommandInput,
  ...rest: any[]
) => Paginator<ListClusterAlertsCommandOutput> = createPaginator<
  MediaLivePaginationConfiguration,
  ListClusterAlertsCommandInput,
  ListClusterAlertsCommandOutput
>(MediaLiveClient, ListClusterAlertsCommand, "NextToken", "NextToken", "MaxResults");
