// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetEntityTypesCommand,
  GetEntityTypesCommandInput,
  GetEntityTypesCommandOutput,
} from "../commands/GetEntityTypesCommand";
import { FraudDetectorClient } from "../FraudDetectorClient";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetEntityTypes: (
  config: FraudDetectorPaginationConfiguration,
  input: GetEntityTypesCommandInput,
  ...rest: any[]
) => Paginator<GetEntityTypesCommandOutput> = createPaginator<
  FraudDetectorPaginationConfiguration,
  GetEntityTypesCommandInput,
  GetEntityTypesCommandOutput
>(FraudDetectorClient, GetEntityTypesCommand, "nextToken", "nextToken", "maxResults");
