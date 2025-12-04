// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeCatalystClient } from "../CodeCatalystClient";
import {
  ListDevEnvironmentSessionsCommand,
  ListDevEnvironmentSessionsCommandInput,
  ListDevEnvironmentSessionsCommandOutput,
} from "../commands/ListDevEnvironmentSessionsCommand";
import { CodeCatalystPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDevEnvironmentSessions: (
  config: CodeCatalystPaginationConfiguration,
  input: ListDevEnvironmentSessionsCommandInput,
  ...rest: any[]
) => Paginator<ListDevEnvironmentSessionsCommandOutput> = createPaginator<
  CodeCatalystPaginationConfiguration,
  ListDevEnvironmentSessionsCommandInput,
  ListDevEnvironmentSessionsCommandOutput
>(CodeCatalystClient, ListDevEnvironmentSessionsCommand, "nextToken", "nextToken", "maxResults");
