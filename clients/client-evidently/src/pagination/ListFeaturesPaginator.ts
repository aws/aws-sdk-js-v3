// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFeaturesCommand,
  ListFeaturesCommandInput,
  ListFeaturesCommandOutput,
} from "../commands/ListFeaturesCommand";
import { EvidentlyClient } from "../EvidentlyClient";
import { EvidentlyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFeatures: (
  config: EvidentlyPaginationConfiguration,
  input: ListFeaturesCommandInput,
  ...rest: any[]
) => Paginator<ListFeaturesCommandOutput> = createPaginator<
  EvidentlyPaginationConfiguration,
  ListFeaturesCommandInput,
  ListFeaturesCommandOutput
>(EvidentlyClient, ListFeaturesCommand, "nextToken", "nextToken", "maxResults");
