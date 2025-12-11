// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListContentsCommand,
  ListContentsCommandInput,
  ListContentsCommandOutput,
} from "../commands/ListContentsCommand";
import { WisdomClient } from "../WisdomClient";
import { WisdomPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContents: (
  config: WisdomPaginationConfiguration,
  input: ListContentsCommandInput,
  ...rest: any[]
) => Paginator<ListContentsCommandOutput> = createPaginator<
  WisdomPaginationConfiguration,
  ListContentsCommandInput,
  ListContentsCommandOutput
>(WisdomClient, ListContentsCommand, "nextToken", "nextToken", "maxResults");
