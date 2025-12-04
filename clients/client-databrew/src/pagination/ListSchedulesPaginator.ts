// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSchedulesCommand,
  ListSchedulesCommandInput,
  ListSchedulesCommandOutput,
} from "../commands/ListSchedulesCommand";
import { DataBrewClient } from "../DataBrewClient";
import { DataBrewPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSchedules: (
  config: DataBrewPaginationConfiguration,
  input: ListSchedulesCommandInput,
  ...rest: any[]
) => Paginator<ListSchedulesCommandOutput> = createPaginator<
  DataBrewPaginationConfiguration,
  ListSchedulesCommandInput,
  ListSchedulesCommandOutput
>(DataBrewClient, ListSchedulesCommand, "NextToken", "NextToken", "MaxResults");
