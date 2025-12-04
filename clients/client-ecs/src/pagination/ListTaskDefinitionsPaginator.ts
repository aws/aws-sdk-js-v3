// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTaskDefinitionsCommand,
  ListTaskDefinitionsCommandInput,
  ListTaskDefinitionsCommandOutput,
} from "../commands/ListTaskDefinitionsCommand";
import { ECSClient } from "../ECSClient";
import { ECSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTaskDefinitions: (
  config: ECSPaginationConfiguration,
  input: ListTaskDefinitionsCommandInput,
  ...rest: any[]
) => Paginator<ListTaskDefinitionsCommandOutput> = createPaginator<
  ECSPaginationConfiguration,
  ListTaskDefinitionsCommandInput,
  ListTaskDefinitionsCommandOutput
>(ECSClient, ListTaskDefinitionsCommand, "nextToken", "nextToken", "maxResults");
