// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSAMLProviderTagsCommand,
  ListSAMLProviderTagsCommandInput,
  ListSAMLProviderTagsCommandOutput,
} from "../commands/ListSAMLProviderTagsCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSAMLProviderTags: (
  config: IAMPaginationConfiguration,
  input: ListSAMLProviderTagsCommandInput,
  ...rest: any[]
) => Paginator<ListSAMLProviderTagsCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  ListSAMLProviderTagsCommandInput,
  ListSAMLProviderTagsCommandOutput
>(IAMClient, ListSAMLProviderTagsCommand, "Marker", "Marker", "MaxItems");
