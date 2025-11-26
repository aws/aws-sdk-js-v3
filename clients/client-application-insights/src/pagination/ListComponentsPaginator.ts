// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ApplicationInsightsClient } from "../ApplicationInsightsClient";
import {
  ListComponentsCommand,
  ListComponentsCommandInput,
  ListComponentsCommandOutput,
} from "../commands/ListComponentsCommand";
import { ApplicationInsightsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListComponents: (
  config: ApplicationInsightsPaginationConfiguration,
  input: ListComponentsCommandInput,
  ...rest: any[]
) => Paginator<ListComponentsCommandOutput> = createPaginator<
  ApplicationInsightsPaginationConfiguration,
  ListComponentsCommandInput,
  ListComponentsCommandOutput
>(ApplicationInsightsClient, ListComponentsCommand, "NextToken", "NextToken", "MaxResults");
