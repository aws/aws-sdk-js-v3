// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { AmpClient } from "../AmpClient";
import {
  ListAnomalyDetectorsCommand,
  ListAnomalyDetectorsCommandInput,
  ListAnomalyDetectorsCommandOutput,
} from "../commands/ListAnomalyDetectorsCommand";
import { AmpPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAnomalyDetectors: (
  config: AmpPaginationConfiguration,
  input: ListAnomalyDetectorsCommandInput,
  ...rest: any[]
) => Paginator<ListAnomalyDetectorsCommandOutput> = createPaginator<
  AmpPaginationConfiguration,
  ListAnomalyDetectorsCommandInput,
  ListAnomalyDetectorsCommandOutput
>(AmpClient, ListAnomalyDetectorsCommand, "nextToken", "nextToken", "maxResults");
