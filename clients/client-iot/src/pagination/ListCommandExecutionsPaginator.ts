// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCommandExecutionsCommand,
  ListCommandExecutionsCommandInput,
  ListCommandExecutionsCommandOutput,
} from "../commands/ListCommandExecutionsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCommandExecutions: (
  config: IoTPaginationConfiguration,
  input: ListCommandExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListCommandExecutionsCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListCommandExecutionsCommandInput,
  ListCommandExecutionsCommandOutput
>(IoTClient, ListCommandExecutionsCommand, "nextToken", "nextToken", "maxResults");
