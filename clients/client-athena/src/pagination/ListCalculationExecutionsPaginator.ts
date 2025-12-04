// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AthenaClient } from "../AthenaClient";
import {
  ListCalculationExecutionsCommand,
  ListCalculationExecutionsCommandInput,
  ListCalculationExecutionsCommandOutput,
} from "../commands/ListCalculationExecutionsCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCalculationExecutions: (
  config: AthenaPaginationConfiguration,
  input: ListCalculationExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListCalculationExecutionsCommandOutput> = createPaginator<
  AthenaPaginationConfiguration,
  ListCalculationExecutionsCommandInput,
  ListCalculationExecutionsCommandOutput
>(AthenaClient, ListCalculationExecutionsCommand, "NextToken", "NextToken", "MaxResults");
