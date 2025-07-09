// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListAccountActivitiesCommand,
  ListAccountActivitiesCommandInput,
  ListAccountActivitiesCommandOutput,
} from "../commands/ListAccountActivitiesCommand";
import { FreeTierClient } from "../FreeTierClient";
import { FreeTierPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccountActivities: (
  config: FreeTierPaginationConfiguration,
  input: ListAccountActivitiesCommandInput,
  ...rest: any[]
) => Paginator<ListAccountActivitiesCommandOutput> = createPaginator<
  FreeTierPaginationConfiguration,
  ListAccountActivitiesCommandInput,
  ListAccountActivitiesCommandOutput
>(FreeTierClient, ListAccountActivitiesCommand, "nextToken", "nextToken", "maxResults");
