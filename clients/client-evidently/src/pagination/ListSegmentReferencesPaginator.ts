// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSegmentReferencesCommand,
  ListSegmentReferencesCommandInput,
  ListSegmentReferencesCommandOutput,
} from "../commands/ListSegmentReferencesCommand";
import { EvidentlyClient } from "../EvidentlyClient";
import { EvidentlyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSegmentReferences: (
  config: EvidentlyPaginationConfiguration,
  input: ListSegmentReferencesCommandInput,
  ...rest: any[]
) => Paginator<ListSegmentReferencesCommandOutput> = createPaginator<
  EvidentlyPaginationConfiguration,
  ListSegmentReferencesCommandInput,
  ListSegmentReferencesCommandOutput
>(EvidentlyClient, ListSegmentReferencesCommand, "nextToken", "nextToken", "maxResults");
