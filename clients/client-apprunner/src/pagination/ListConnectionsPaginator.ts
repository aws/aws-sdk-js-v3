// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppRunnerClient } from "../AppRunnerClient";
import {
  ListConnectionsCommand,
  ListConnectionsCommandInput,
  ListConnectionsCommandOutput,
} from "../commands/ListConnectionsCommand";
import { AppRunnerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConnections: (
  config: AppRunnerPaginationConfiguration,
  input: ListConnectionsCommandInput,
  ...rest: any[]
) => Paginator<ListConnectionsCommandOutput> = createPaginator<
  AppRunnerPaginationConfiguration,
  ListConnectionsCommandInput,
  ListConnectionsCommandOutput
>(AppRunnerClient, ListConnectionsCommand, "NextToken", "NextToken", "MaxResults");
