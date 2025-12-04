// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { XRayClient } from "../XRayClient";
import { XRayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTagsForResource: (
  config: XRayPaginationConfiguration,
  input: ListTagsForResourceCommandInput,
  ...rest: any[]
) => Paginator<ListTagsForResourceCommandOutput> = createPaginator<
  XRayPaginationConfiguration,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
>(XRayClient, ListTagsForResourceCommand, "NextToken", "NextToken", "");
