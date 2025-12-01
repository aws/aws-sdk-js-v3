// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SelectAggregateResourceConfigCommand,
  SelectAggregateResourceConfigCommandInput,
  SelectAggregateResourceConfigCommandOutput,
} from "../commands/SelectAggregateResourceConfigCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSelectAggregateResourceConfig: (
  config: ConfigServicePaginationConfiguration,
  input: SelectAggregateResourceConfigCommandInput,
  ...rest: any[]
) => Paginator<SelectAggregateResourceConfigCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  SelectAggregateResourceConfigCommandInput,
  SelectAggregateResourceConfigCommandOutput
>(ConfigServiceClient, SelectAggregateResourceConfigCommand, "NextToken", "NextToken", "Limit");
