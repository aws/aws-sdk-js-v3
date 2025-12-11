// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListIncidentRecordsCommand,
  ListIncidentRecordsCommandInput,
  ListIncidentRecordsCommandOutput,
} from "../commands/ListIncidentRecordsCommand";
import { SSMIncidentsClient } from "../SSMIncidentsClient";
import { SSMIncidentsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIncidentRecords: (
  config: SSMIncidentsPaginationConfiguration,
  input: ListIncidentRecordsCommandInput,
  ...rest: any[]
) => Paginator<ListIncidentRecordsCommandOutput> = createPaginator<
  SSMIncidentsPaginationConfiguration,
  ListIncidentRecordsCommandInput,
  ListIncidentRecordsCommandOutput
>(SSMIncidentsClient, ListIncidentRecordsCommand, "nextToken", "nextToken", "maxResults");
