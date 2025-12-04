// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeCatalystClient } from "../CodeCatalystClient";
import {
  ListDevEnvironmentsCommand,
  ListDevEnvironmentsCommandInput,
  ListDevEnvironmentsCommandOutput,
} from "../commands/ListDevEnvironmentsCommand";
import { CodeCatalystPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDevEnvironments: (
  config: CodeCatalystPaginationConfiguration,
  input: ListDevEnvironmentsCommandInput,
  ...rest: any[]
) => Paginator<ListDevEnvironmentsCommandOutput> = createPaginator<
  CodeCatalystPaginationConfiguration,
  ListDevEnvironmentsCommandInput,
  ListDevEnvironmentsCommandOutput
>(CodeCatalystClient, ListDevEnvironmentsCommand, "nextToken", "nextToken", "maxResults");
