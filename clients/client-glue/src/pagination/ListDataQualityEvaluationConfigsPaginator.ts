// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataQualityEvaluationConfigsCommand,
  ListDataQualityEvaluationConfigsCommandInput,
  ListDataQualityEvaluationConfigsCommandOutput,
} from "../commands/ListDataQualityEvaluationConfigsCommand";
import { GlueClient } from "../GlueClient";
import type { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataQualityEvaluationConfigs: (
  config: GluePaginationConfiguration,
  input: ListDataQualityEvaluationConfigsCommandInput,
  ...rest: any[]
) => Paginator<ListDataQualityEvaluationConfigsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  ListDataQualityEvaluationConfigsCommandInput,
  ListDataQualityEvaluationConfigsCommandOutput
>(GlueClient, ListDataQualityEvaluationConfigsCommand, "NextToken", "NextToken", "MaxResults");
