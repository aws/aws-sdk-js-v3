// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetDetectorsCommand,
  GetDetectorsCommandInput,
  GetDetectorsCommandOutput,
} from "../commands/GetDetectorsCommand";
import { FraudDetectorClient } from "../FraudDetectorClient";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetDetectors: (
  config: FraudDetectorPaginationConfiguration,
  input: GetDetectorsCommandInput,
  ...rest: any[]
) => Paginator<GetDetectorsCommandOutput> = createPaginator<
  FraudDetectorPaginationConfiguration,
  GetDetectorsCommandInput,
  GetDetectorsCommandOutput
>(FraudDetectorClient, GetDetectorsCommand, "nextToken", "nextToken", "maxResults");
