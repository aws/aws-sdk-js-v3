// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRecommendationsCommand,
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
} from "../commands/ListRecommendationsCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecommendations: (
  config: RedshiftPaginationConfiguration,
  input: ListRecommendationsCommandInput,
  ...rest: any[]
) => Paginator<ListRecommendationsCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput
>(RedshiftClient, ListRecommendationsCommand, "Marker", "Marker", "MaxRecords");
