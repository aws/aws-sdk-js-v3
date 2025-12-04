// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDeliverabilityTestReportsCommand,
  ListDeliverabilityTestReportsCommandInput,
  ListDeliverabilityTestReportsCommandOutput,
} from "../commands/ListDeliverabilityTestReportsCommand";
import { SESv2Client } from "../SESv2Client";
import { SESv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDeliverabilityTestReports: (
  config: SESv2PaginationConfiguration,
  input: ListDeliverabilityTestReportsCommandInput,
  ...rest: any[]
) => Paginator<ListDeliverabilityTestReportsCommandOutput> = createPaginator<
  SESv2PaginationConfiguration,
  ListDeliverabilityTestReportsCommandInput,
  ListDeliverabilityTestReportsCommandOutput
>(SESv2Client, ListDeliverabilityTestReportsCommand, "NextToken", "NextToken", "PageSize");
