// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataQualityResultsV2Command,
  ListDataQualityResultsV2CommandInput,
  ListDataQualityResultsV2CommandOutput,
} from "../commands/ListDataQualityResultsV2Command";
import { GlueClient } from "../GlueClient";
import type { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataQualityResultsV2: (
  config: GluePaginationConfiguration,
  input: ListDataQualityResultsV2CommandInput,
  ...rest: any[]
) => Paginator<ListDataQualityResultsV2CommandOutput> = createPaginator<
  GluePaginationConfiguration,
  ListDataQualityResultsV2CommandInput,
  ListDataQualityResultsV2CommandOutput
>(GlueClient, ListDataQualityResultsV2Command, "NextToken", "NextToken", "MaxResults");
