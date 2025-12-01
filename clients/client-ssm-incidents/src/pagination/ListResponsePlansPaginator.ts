// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResponsePlansCommand,
  ListResponsePlansCommandInput,
  ListResponsePlansCommandOutput,
} from "../commands/ListResponsePlansCommand";
import { SSMIncidentsClient } from "../SSMIncidentsClient";
import { SSMIncidentsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResponsePlans: (
  config: SSMIncidentsPaginationConfiguration,
  input: ListResponsePlansCommandInput,
  ...rest: any[]
) => Paginator<ListResponsePlansCommandOutput> = createPaginator<
  SSMIncidentsPaginationConfiguration,
  ListResponsePlansCommandInput,
  ListResponsePlansCommandOutput
>(SSMIncidentsClient, ListResponsePlansCommand, "nextToken", "nextToken", "maxResults");
