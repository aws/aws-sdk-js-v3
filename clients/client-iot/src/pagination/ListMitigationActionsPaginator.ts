// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMitigationActionsCommand,
  ListMitigationActionsCommandInput,
  ListMitigationActionsCommandOutput,
} from "../commands/ListMitigationActionsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMitigationActions: (
  config: IoTPaginationConfiguration,
  input: ListMitigationActionsCommandInput,
  ...rest: any[]
) => Paginator<ListMitigationActionsCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListMitigationActionsCommandInput,
  ListMitigationActionsCommandOutput
>(IoTClient, ListMitigationActionsCommand, "nextToken", "nextToken", "maxResults");
