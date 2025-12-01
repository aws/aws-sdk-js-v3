// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListConformancePackComplianceScoresCommand,
  ListConformancePackComplianceScoresCommandInput,
  ListConformancePackComplianceScoresCommandOutput,
} from "../commands/ListConformancePackComplianceScoresCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConformancePackComplianceScores: (
  config: ConfigServicePaginationConfiguration,
  input: ListConformancePackComplianceScoresCommandInput,
  ...rest: any[]
) => Paginator<ListConformancePackComplianceScoresCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  ListConformancePackComplianceScoresCommandInput,
  ListConformancePackComplianceScoresCommandOutput
>(ConfigServiceClient, ListConformancePackComplianceScoresCommand, "NextToken", "NextToken", "Limit");
