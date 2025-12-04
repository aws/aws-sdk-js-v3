// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDetectMitigationActionsExecutionsCommand,
  ListDetectMitigationActionsExecutionsCommandInput,
  ListDetectMitigationActionsExecutionsCommandOutput,
} from "../commands/ListDetectMitigationActionsExecutionsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDetectMitigationActionsExecutions: (
  config: IoTPaginationConfiguration,
  input: ListDetectMitigationActionsExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListDetectMitigationActionsExecutionsCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListDetectMitigationActionsExecutionsCommandInput,
  ListDetectMitigationActionsExecutionsCommandOutput
>(IoTClient, ListDetectMitigationActionsExecutionsCommand, "nextToken", "nextToken", "maxResults");
