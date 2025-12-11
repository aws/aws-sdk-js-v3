// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSegmentsCommand,
  ListSegmentsCommandInput,
  ListSegmentsCommandOutput,
} from "../commands/ListSegmentsCommand";
import { EvidentlyClient } from "../EvidentlyClient";
import { EvidentlyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSegments: (
  config: EvidentlyPaginationConfiguration,
  input: ListSegmentsCommandInput,
  ...rest: any[]
) => Paginator<ListSegmentsCommandOutput> = createPaginator<
  EvidentlyPaginationConfiguration,
  ListSegmentsCommandInput,
  ListSegmentsCommandOutput
>(EvidentlyClient, ListSegmentsCommand, "nextToken", "nextToken", "maxResults");
