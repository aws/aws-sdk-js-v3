// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssetRevisionsCommand,
  ListAssetRevisionsCommandInput,
  ListAssetRevisionsCommandOutput,
} from "../commands/ListAssetRevisionsCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssetRevisions: (
  config: DataZonePaginationConfiguration,
  input: ListAssetRevisionsCommandInput,
  ...rest: any[]
) => Paginator<ListAssetRevisionsCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListAssetRevisionsCommandInput,
  ListAssetRevisionsCommandOutput
>(DataZoneClient, ListAssetRevisionsCommand, "nextToken", "nextToken", "maxResults");
