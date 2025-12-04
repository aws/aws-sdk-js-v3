// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPlaybackKeyPairsCommand,
  ListPlaybackKeyPairsCommandInput,
  ListPlaybackKeyPairsCommandOutput,
} from "../commands/ListPlaybackKeyPairsCommand";
import { IvsClient } from "../IvsClient";
import { IvsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPlaybackKeyPairs: (
  config: IvsPaginationConfiguration,
  input: ListPlaybackKeyPairsCommandInput,
  ...rest: any[]
) => Paginator<ListPlaybackKeyPairsCommandOutput> = createPaginator<
  IvsPaginationConfiguration,
  ListPlaybackKeyPairsCommandInput,
  ListPlaybackKeyPairsCommandOutput
>(IvsClient, ListPlaybackKeyPairsCommand, "nextToken", "nextToken", "maxResults");
