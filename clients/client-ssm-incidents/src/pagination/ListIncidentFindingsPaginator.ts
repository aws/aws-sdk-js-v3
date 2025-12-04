// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListIncidentFindingsCommand,
  ListIncidentFindingsCommandInput,
  ListIncidentFindingsCommandOutput,
} from "../commands/ListIncidentFindingsCommand";
import { SSMIncidentsClient } from "../SSMIncidentsClient";
import { SSMIncidentsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIncidentFindings: (
  config: SSMIncidentsPaginationConfiguration,
  input: ListIncidentFindingsCommandInput,
  ...rest: any[]
) => Paginator<ListIncidentFindingsCommandOutput> = createPaginator<
  SSMIncidentsPaginationConfiguration,
  ListIncidentFindingsCommandInput,
  ListIncidentFindingsCommandOutput
>(SSMIncidentsClient, ListIncidentFindingsCommand, "nextToken", "nextToken", "maxResults");
