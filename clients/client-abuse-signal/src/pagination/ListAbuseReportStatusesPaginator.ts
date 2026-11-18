// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AbuseSignalClient } from "../AbuseSignalClient";
import {
  ListAbuseReportStatusesCommand,
  ListAbuseReportStatusesCommandInput,
  ListAbuseReportStatusesCommandOutput,
} from "../commands/ListAbuseReportStatusesCommand";
import type { AbuseSignalPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAbuseReportStatuses: (
  config: AbuseSignalPaginationConfiguration,
  input: ListAbuseReportStatusesCommandInput,
  ...rest: any[]
) => Paginator<ListAbuseReportStatusesCommandOutput> = createPaginator<
  AbuseSignalPaginationConfiguration,
  ListAbuseReportStatusesCommandInput,
  ListAbuseReportStatusesCommandOutput
>(AbuseSignalClient, ListAbuseReportStatusesCommand, "nextToken", "nextToken", "maxResults");
