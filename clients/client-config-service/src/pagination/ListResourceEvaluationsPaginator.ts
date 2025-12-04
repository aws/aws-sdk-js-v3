// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResourceEvaluationsCommand,
  ListResourceEvaluationsCommandInput,
  ListResourceEvaluationsCommandOutput,
} from "../commands/ListResourceEvaluationsCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourceEvaluations: (
  config: ConfigServicePaginationConfiguration,
  input: ListResourceEvaluationsCommandInput,
  ...rest: any[]
) => Paginator<ListResourceEvaluationsCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  ListResourceEvaluationsCommandInput,
  ListResourceEvaluationsCommandOutput
>(ConfigServiceClient, ListResourceEvaluationsCommand, "NextToken", "NextToken", "Limit");
