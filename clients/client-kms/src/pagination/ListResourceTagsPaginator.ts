// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResourceTagsCommand,
  ListResourceTagsCommandInput,
  ListResourceTagsCommandOutput,
} from "../commands/ListResourceTagsCommand";
import { KMSClient } from "../KMSClient";
import { KMSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourceTags: (
  config: KMSPaginationConfiguration,
  input: ListResourceTagsCommandInput,
  ...rest: any[]
) => Paginator<ListResourceTagsCommandOutput> = createPaginator<
  KMSPaginationConfiguration,
  ListResourceTagsCommandInput,
  ListResourceTagsCommandOutput
>(KMSClient, ListResourceTagsCommand, "Marker", "NextMarker", "Limit");
