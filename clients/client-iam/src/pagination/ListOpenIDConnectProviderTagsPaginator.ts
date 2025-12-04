// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOpenIDConnectProviderTagsCommand,
  ListOpenIDConnectProviderTagsCommandInput,
  ListOpenIDConnectProviderTagsCommandOutput,
} from "../commands/ListOpenIDConnectProviderTagsCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOpenIDConnectProviderTags: (
  config: IAMPaginationConfiguration,
  input: ListOpenIDConnectProviderTagsCommandInput,
  ...rest: any[]
) => Paginator<ListOpenIDConnectProviderTagsCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  ListOpenIDConnectProviderTagsCommandInput,
  ListOpenIDConnectProviderTagsCommandOutput
>(IAMClient, ListOpenIDConnectProviderTagsCommand, "Marker", "Marker", "MaxItems");
