// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListQueryLoggingConfigsCommand,
  ListQueryLoggingConfigsCommandInput,
  ListQueryLoggingConfigsCommandOutput,
} from "../commands/ListQueryLoggingConfigsCommand";
import { Route53Client } from "../Route53Client";
import { Route53PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListQueryLoggingConfigs: (
  config: Route53PaginationConfiguration,
  input: ListQueryLoggingConfigsCommandInput,
  ...rest: any[]
) => Paginator<ListQueryLoggingConfigsCommandOutput> = createPaginator<
  Route53PaginationConfiguration,
  ListQueryLoggingConfigsCommandInput,
  ListQueryLoggingConfigsCommandOutput
>(Route53Client, ListQueryLoggingConfigsCommand, "NextToken", "NextToken", "MaxResults");
