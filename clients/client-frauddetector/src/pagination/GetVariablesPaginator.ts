// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetVariablesCommand,
  GetVariablesCommandInput,
  GetVariablesCommandOutput,
} from "../commands/GetVariablesCommand";
import { FraudDetectorClient } from "../FraudDetectorClient";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetVariables: (
  config: FraudDetectorPaginationConfiguration,
  input: GetVariablesCommandInput,
  ...rest: any[]
) => Paginator<GetVariablesCommandOutput> = createPaginator<
  FraudDetectorPaginationConfiguration,
  GetVariablesCommandInput,
  GetVariablesCommandOutput
>(FraudDetectorClient, GetVariablesCommand, "nextToken", "nextToken", "maxResults");
