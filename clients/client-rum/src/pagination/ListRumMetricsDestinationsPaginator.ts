// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRumMetricsDestinationsCommand,
  ListRumMetricsDestinationsCommandInput,
  ListRumMetricsDestinationsCommandOutput,
} from "../commands/ListRumMetricsDestinationsCommand";
import { RUMClient } from "../RUMClient";
import { RUMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRumMetricsDestinations: (
  config: RUMPaginationConfiguration,
  input: ListRumMetricsDestinationsCommandInput,
  ...rest: any[]
) => Paginator<ListRumMetricsDestinationsCommandOutput> = createPaginator<
  RUMPaginationConfiguration,
  ListRumMetricsDestinationsCommandInput,
  ListRumMetricsDestinationsCommandOutput
>(RUMClient, ListRumMetricsDestinationsCommand, "NextToken", "NextToken", "MaxResults");
