// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { GetModelsCommand, GetModelsCommandInput, GetModelsCommandOutput } from "../commands/GetModelsCommand";
import { FraudDetectorClient } from "../FraudDetectorClient";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetModels: (
  config: FraudDetectorPaginationConfiguration,
  input: GetModelsCommandInput,
  ...rest: any[]
) => Paginator<GetModelsCommandOutput> = createPaginator<
  FraudDetectorPaginationConfiguration,
  GetModelsCommandInput,
  GetModelsCommandOutput
>(FraudDetectorClient, GetModelsCommand, "nextToken", "nextToken", "maxResults");
