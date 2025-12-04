// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListStreamsCommand, ListStreamsCommandInput, ListStreamsCommandOutput } from "../commands/ListStreamsCommand";
import { KeyspacesStreamsClient } from "../KeyspacesStreamsClient";
import { KeyspacesStreamsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStreams: (
  config: KeyspacesStreamsPaginationConfiguration,
  input: ListStreamsCommandInput,
  ...rest: any[]
) => Paginator<ListStreamsCommandOutput> = createPaginator<
  KeyspacesStreamsPaginationConfiguration,
  ListStreamsCommandInput,
  ListStreamsCommandOutput
>(KeyspacesStreamsClient, ListStreamsCommand, "nextToken", "nextToken", "maxResults");
