// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCommandsCommand,
  ListCommandsCommandInput,
  ListCommandsCommandOutput,
} from "../commands/ListCommandsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCommands: (
  config: IoTPaginationConfiguration,
  input: ListCommandsCommandInput,
  ...rest: any[]
) => Paginator<ListCommandsCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListCommandsCommandInput,
  ListCommandsCommandOutput
>(IoTClient, ListCommandsCommand, "nextToken", "nextToken", "maxResults");
