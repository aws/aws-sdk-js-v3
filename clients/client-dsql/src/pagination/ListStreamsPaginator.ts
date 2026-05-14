// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListStreamsCommand, ListStreamsCommandInput, ListStreamsCommandOutput } from "../commands/ListStreamsCommand";
import { DSQLClient } from "../DSQLClient";
import type { DSQLPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStreams: (
  config: DSQLPaginationConfiguration,
  input: ListStreamsCommandInput,
  ...rest: any[]
) => Paginator<ListStreamsCommandOutput> = createPaginator<
  DSQLPaginationConfiguration,
  ListStreamsCommandInput,
  ListStreamsCommandOutput
>(DSQLClient, ListStreamsCommand, "nextToken", "nextToken", "maxResults");
