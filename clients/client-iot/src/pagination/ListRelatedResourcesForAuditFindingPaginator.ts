// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRelatedResourcesForAuditFindingCommand,
  ListRelatedResourcesForAuditFindingCommandInput,
  ListRelatedResourcesForAuditFindingCommandOutput,
} from "../commands/ListRelatedResourcesForAuditFindingCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRelatedResourcesForAuditFinding: (
  config: IoTPaginationConfiguration,
  input: ListRelatedResourcesForAuditFindingCommandInput,
  ...rest: any[]
) => Paginator<ListRelatedResourcesForAuditFindingCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListRelatedResourcesForAuditFindingCommandInput,
  ListRelatedResourcesForAuditFindingCommandOutput
>(IoTClient, ListRelatedResourcesForAuditFindingCommand, "nextToken", "nextToken", "maxResults");
