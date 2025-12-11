// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListScheduledAuditsCommand,
  ListScheduledAuditsCommandInput,
  ListScheduledAuditsCommandOutput,
} from "../commands/ListScheduledAuditsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListScheduledAudits: (
  config: IoTPaginationConfiguration,
  input: ListScheduledAuditsCommandInput,
  ...rest: any[]
) => Paginator<ListScheduledAuditsCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListScheduledAuditsCommandInput,
  ListScheduledAuditsCommandOutput
>(IoTClient, ListScheduledAuditsCommand, "nextToken", "nextToken", "maxResults");
