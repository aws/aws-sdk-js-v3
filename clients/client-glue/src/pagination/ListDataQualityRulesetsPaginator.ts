// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataQualityRulesetsCommand,
  ListDataQualityRulesetsCommandInput,
  ListDataQualityRulesetsCommandOutput,
} from "../commands/ListDataQualityRulesetsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataQualityRulesets: (
  config: GluePaginationConfiguration,
  input: ListDataQualityRulesetsCommandInput,
  ...rest: any[]
) => Paginator<ListDataQualityRulesetsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  ListDataQualityRulesetsCommandInput,
  ListDataQualityRulesetsCommandOutput
>(GlueClient, ListDataQualityRulesetsCommand, "NextToken", "NextToken", "MaxResults");
