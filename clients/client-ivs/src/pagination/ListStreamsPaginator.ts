// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListStreamsCommand, ListStreamsCommandInput, ListStreamsCommandOutput } from "../commands/ListStreamsCommand";
import { IvsClient } from "../IvsClient";
import { IvsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStreams: (
  config: IvsPaginationConfiguration,
  input: ListStreamsCommandInput,
  ...rest: any[]
) => Paginator<ListStreamsCommandOutput> = createPaginator<
  IvsPaginationConfiguration,
  ListStreamsCommandInput,
  ListStreamsCommandOutput
>(IvsClient, ListStreamsCommand, "nextToken", "nextToken", "maxResults");
