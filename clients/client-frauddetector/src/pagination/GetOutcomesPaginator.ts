// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { GetOutcomesCommand, GetOutcomesCommandInput, GetOutcomesCommandOutput } from "../commands/GetOutcomesCommand";
import { FraudDetectorClient } from "../FraudDetectorClient";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetOutcomes: (
  config: FraudDetectorPaginationConfiguration,
  input: GetOutcomesCommandInput,
  ...rest: any[]
) => Paginator<GetOutcomesCommandOutput> = createPaginator<
  FraudDetectorPaginationConfiguration,
  GetOutcomesCommandInput,
  GetOutcomesCommandOutput
>(FraudDetectorClient, GetOutcomesCommand, "nextToken", "nextToken", "maxResults");
