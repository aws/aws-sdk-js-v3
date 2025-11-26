// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetBehaviorModelTrainingSummariesCommand,
  GetBehaviorModelTrainingSummariesCommandInput,
  GetBehaviorModelTrainingSummariesCommandOutput,
} from "../commands/GetBehaviorModelTrainingSummariesCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetBehaviorModelTrainingSummaries: (
  config: IoTPaginationConfiguration,
  input: GetBehaviorModelTrainingSummariesCommandInput,
  ...rest: any[]
) => Paginator<GetBehaviorModelTrainingSummariesCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  GetBehaviorModelTrainingSummariesCommandInput,
  GetBehaviorModelTrainingSummariesCommandOutput
>(IoTClient, GetBehaviorModelTrainingSummariesCommand, "nextToken", "nextToken", "maxResults");
