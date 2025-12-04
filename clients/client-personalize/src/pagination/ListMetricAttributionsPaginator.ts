// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMetricAttributionsCommand,
  ListMetricAttributionsCommandInput,
  ListMetricAttributionsCommandOutput,
} from "../commands/ListMetricAttributionsCommand";
import { PersonalizeClient } from "../PersonalizeClient";
import { PersonalizePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMetricAttributions: (
  config: PersonalizePaginationConfiguration,
  input: ListMetricAttributionsCommandInput,
  ...rest: any[]
) => Paginator<ListMetricAttributionsCommandOutput> = createPaginator<
  PersonalizePaginationConfiguration,
  ListMetricAttributionsCommandInput,
  ListMetricAttributionsCommandOutput
>(PersonalizeClient, ListMetricAttributionsCommand, "nextToken", "nextToken", "maxResults");
