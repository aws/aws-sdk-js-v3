// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListNodesCommand, ListNodesCommandInput, ListNodesCommandOutput } from "../commands/ListNodesCommand";
import { MediaLiveClient } from "../MediaLiveClient";
import { MediaLivePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNodes: (
  config: MediaLivePaginationConfiguration,
  input: ListNodesCommandInput,
  ...rest: any[]
) => Paginator<ListNodesCommandOutput> = createPaginator<
  MediaLivePaginationConfiguration,
  ListNodesCommandInput,
  ListNodesCommandOutput
>(MediaLiveClient, ListNodesCommand, "NextToken", "NextToken", "MaxResults");
