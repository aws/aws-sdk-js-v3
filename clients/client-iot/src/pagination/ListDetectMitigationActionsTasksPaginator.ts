// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDetectMitigationActionsTasksCommand,
  ListDetectMitigationActionsTasksCommandInput,
  ListDetectMitigationActionsTasksCommandOutput,
} from "../commands/ListDetectMitigationActionsTasksCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDetectMitigationActionsTasks: (
  config: IoTPaginationConfiguration,
  input: ListDetectMitigationActionsTasksCommandInput,
  ...rest: any[]
) => Paginator<ListDetectMitigationActionsTasksCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListDetectMitigationActionsTasksCommandInput,
  ListDetectMitigationActionsTasksCommandOutput
>(IoTClient, ListDetectMitigationActionsTasksCommand, "nextToken", "nextToken", "maxResults");
