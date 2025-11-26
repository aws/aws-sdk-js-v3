// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchResourceTagsCommand,
  SearchResourceTagsCommandInput,
  SearchResourceTagsCommandOutput,
} from "../commands/SearchResourceTagsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchResourceTags: (
  config: ConnectPaginationConfiguration,
  input: SearchResourceTagsCommandInput,
  ...rest: any[]
) => Paginator<SearchResourceTagsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  SearchResourceTagsCommandInput,
  SearchResourceTagsCommandOutput
>(ConnectClient, SearchResourceTagsCommand, "NextToken", "NextToken", "MaxResults");
