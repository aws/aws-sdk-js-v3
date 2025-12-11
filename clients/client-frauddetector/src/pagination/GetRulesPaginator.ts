// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { GetRulesCommand, GetRulesCommandInput, GetRulesCommandOutput } from "../commands/GetRulesCommand";
import { FraudDetectorClient } from "../FraudDetectorClient";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetRules: (
  config: FraudDetectorPaginationConfiguration,
  input: GetRulesCommandInput,
  ...rest: any[]
) => Paginator<GetRulesCommandOutput> = createPaginator<
  FraudDetectorPaginationConfiguration,
  GetRulesCommandInput,
  GetRulesCommandOutput
>(FraudDetectorClient, GetRulesCommand, "nextToken", "nextToken", "maxResults");
