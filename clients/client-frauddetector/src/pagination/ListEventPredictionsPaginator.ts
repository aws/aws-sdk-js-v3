// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEventPredictionsCommand,
  ListEventPredictionsCommandInput,
  ListEventPredictionsCommandOutput,
} from "../commands/ListEventPredictionsCommand";
import { FraudDetectorClient } from "../FraudDetectorClient";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEventPredictions: (
  config: FraudDetectorPaginationConfiguration,
  input: ListEventPredictionsCommandInput,
  ...rest: any[]
) => Paginator<ListEventPredictionsCommandOutput> = createPaginator<
  FraudDetectorPaginationConfiguration,
  ListEventPredictionsCommandInput,
  ListEventPredictionsCommandOutput
>(FraudDetectorClient, ListEventPredictionsCommand, "nextToken", "nextToken", "maxResults");
