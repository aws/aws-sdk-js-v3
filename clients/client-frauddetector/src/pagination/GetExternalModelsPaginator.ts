// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetExternalModelsCommand,
  GetExternalModelsCommandInput,
  GetExternalModelsCommandOutput,
} from "../commands/GetExternalModelsCommand";
import { FraudDetectorClient } from "../FraudDetectorClient";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetExternalModels: (
  config: FraudDetectorPaginationConfiguration,
  input: GetExternalModelsCommandInput,
  ...rest: any[]
) => Paginator<GetExternalModelsCommandOutput> = createPaginator<
  FraudDetectorPaginationConfiguration,
  GetExternalModelsCommandInput,
  GetExternalModelsCommandOutput
>(FraudDetectorClient, GetExternalModelsCommand, "nextToken", "nextToken", "maxResults");
