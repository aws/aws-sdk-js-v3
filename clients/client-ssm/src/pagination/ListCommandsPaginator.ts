// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCommandsCommand,
  ListCommandsCommandInput,
  ListCommandsCommandOutput,
} from "../commands/ListCommandsCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCommands: (
  config: SSMPaginationConfiguration,
  input: ListCommandsCommandInput,
  ...rest: any[]
) => Paginator<ListCommandsCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  ListCommandsCommandInput,
  ListCommandsCommandOutput
>(SSMClient, ListCommandsCommand, "NextToken", "NextToken", "MaxResults");
