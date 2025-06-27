// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListSdiSourcesCommand,
  ListSdiSourcesCommandInput,
  ListSdiSourcesCommandOutput,
} from "../commands/ListSdiSourcesCommand";
import { MediaLiveClient } from "../MediaLiveClient";
import { MediaLivePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSdiSources: (
  config: MediaLivePaginationConfiguration,
  input: ListSdiSourcesCommandInput,
  ...rest: any[]
) => Paginator<ListSdiSourcesCommandOutput> = createPaginator<
  MediaLivePaginationConfiguration,
  ListSdiSourcesCommandInput,
  ListSdiSourcesCommandOutput
>(MediaLiveClient, ListSdiSourcesCommand, "NextToken", "NextToken", "MaxResults");
