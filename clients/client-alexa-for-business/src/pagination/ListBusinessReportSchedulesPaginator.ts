// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  ListBusinessReportSchedulesCommand,
  ListBusinessReportSchedulesCommandInput,
  ListBusinessReportSchedulesCommandOutput,
} from "../commands/ListBusinessReportSchedulesCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBusinessReportSchedules: (
  config: AlexaForBusinessPaginationConfiguration,
  input: ListBusinessReportSchedulesCommandInput,
  ...rest: any[]
) => Paginator<ListBusinessReportSchedulesCommandOutput> = createPaginator<
  AlexaForBusinessPaginationConfiguration,
  ListBusinessReportSchedulesCommandInput,
  ListBusinessReportSchedulesCommandOutput
>(AlexaForBusinessClient, ListBusinessReportSchedulesCommand, "NextToken", "NextToken", "MaxResults");
