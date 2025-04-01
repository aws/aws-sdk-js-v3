// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListNetworksCommand,
  ListNetworksCommandInput,
  ListNetworksCommandOutput,
} from "../commands/ListNetworksCommand";
import { MediaLiveClient } from "../MediaLiveClient";
import { MediaLivePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNetworks: (
  config: MediaLivePaginationConfiguration,
  input: ListNetworksCommandInput,
  ...rest: any[]
) => Paginator<ListNetworksCommandOutput> = createPaginator<
  MediaLivePaginationConfiguration,
  ListNetworksCommandInput,
  ListNetworksCommandOutput
>(MediaLiveClient, ListNetworksCommand, "NextToken", "NextToken", "MaxResults");
