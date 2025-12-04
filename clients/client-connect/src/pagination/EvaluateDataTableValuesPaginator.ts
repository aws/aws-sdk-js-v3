// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  EvaluateDataTableValuesCommand,
  EvaluateDataTableValuesCommandInput,
  EvaluateDataTableValuesCommandOutput,
} from "../commands/EvaluateDataTableValuesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateEvaluateDataTableValues: (
  config: ConnectPaginationConfiguration,
  input: EvaluateDataTableValuesCommandInput,
  ...rest: any[]
) => Paginator<EvaluateDataTableValuesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  EvaluateDataTableValuesCommandInput,
  EvaluateDataTableValuesCommandOutput
>(ConnectClient, EvaluateDataTableValuesCommand, "NextToken", "NextToken", "MaxResults");
