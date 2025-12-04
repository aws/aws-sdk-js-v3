// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataQualityResultsCommand,
  ListDataQualityResultsCommandInput,
  ListDataQualityResultsCommandOutput,
} from "../commands/ListDataQualityResultsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataQualityResults: (
  config: GluePaginationConfiguration,
  input: ListDataQualityResultsCommandInput,
  ...rest: any[]
) => Paginator<ListDataQualityResultsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  ListDataQualityResultsCommandInput,
  ListDataQualityResultsCommandOutput
>(GlueClient, ListDataQualityResultsCommand, "NextToken", "NextToken", "MaxResults");
