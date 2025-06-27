// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListDataProductRevisionsCommand,
  ListDataProductRevisionsCommandInput,
  ListDataProductRevisionsCommandOutput,
} from "../commands/ListDataProductRevisionsCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataProductRevisions: (
  config: DataZonePaginationConfiguration,
  input: ListDataProductRevisionsCommandInput,
  ...rest: any[]
) => Paginator<ListDataProductRevisionsCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListDataProductRevisionsCommandInput,
  ListDataProductRevisionsCommandOutput
>(DataZoneClient, ListDataProductRevisionsCommand, "nextToken", "nextToken", "maxResults");
