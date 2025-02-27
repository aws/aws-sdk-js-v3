// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListTracksCommand, ListTracksCommandInput, ListTracksCommandOutput } from "../commands/ListTracksCommand";
import { RedshiftServerlessClient } from "../RedshiftServerlessClient";
import { RedshiftServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTracks: (
  config: RedshiftServerlessPaginationConfiguration,
  input: ListTracksCommandInput,
  ...rest: any[]
) => Paginator<ListTracksCommandOutput> = createPaginator<
  RedshiftServerlessPaginationConfiguration,
  ListTracksCommandInput,
  ListTracksCommandOutput
>(RedshiftServerlessClient, ListTracksCommand, "nextToken", "nextToken", "maxResults");
