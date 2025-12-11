// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDeliverabilityTestReportsCommand,
  ListDeliverabilityTestReportsCommandInput,
  ListDeliverabilityTestReportsCommandOutput,
} from "../commands/ListDeliverabilityTestReportsCommand";
import { PinpointEmailClient } from "../PinpointEmailClient";
import { PinpointEmailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDeliverabilityTestReports: (
  config: PinpointEmailPaginationConfiguration,
  input: ListDeliverabilityTestReportsCommandInput,
  ...rest: any[]
) => Paginator<ListDeliverabilityTestReportsCommandOutput> = createPaginator<
  PinpointEmailPaginationConfiguration,
  ListDeliverabilityTestReportsCommandInput,
  ListDeliverabilityTestReportsCommandOutput
>(PinpointEmailClient, ListDeliverabilityTestReportsCommand, "NextToken", "NextToken", "PageSize");
