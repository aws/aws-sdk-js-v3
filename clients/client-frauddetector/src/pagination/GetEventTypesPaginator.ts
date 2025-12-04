// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetEventTypesCommand,
  GetEventTypesCommandInput,
  GetEventTypesCommandOutput,
} from "../commands/GetEventTypesCommand";
import { FraudDetectorClient } from "../FraudDetectorClient";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetEventTypes: (
  config: FraudDetectorPaginationConfiguration,
  input: GetEventTypesCommandInput,
  ...rest: any[]
) => Paginator<GetEventTypesCommandOutput> = createPaginator<
  FraudDetectorPaginationConfiguration,
  GetEventTypesCommandInput,
  GetEventTypesCommandOutput
>(FraudDetectorClient, GetEventTypesCommand, "nextToken", "nextToken", "maxResults");
