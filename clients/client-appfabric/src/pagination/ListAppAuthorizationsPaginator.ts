// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppFabricClient } from "../AppFabricClient";
import {
  ListAppAuthorizationsCommand,
  ListAppAuthorizationsCommandInput,
  ListAppAuthorizationsCommandOutput,
} from "../commands/ListAppAuthorizationsCommand";
import { AppFabricPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAppAuthorizations: (
  config: AppFabricPaginationConfiguration,
  input: ListAppAuthorizationsCommandInput,
  ...rest: any[]
) => Paginator<ListAppAuthorizationsCommandOutput> = createPaginator<
  AppFabricPaginationConfiguration,
  ListAppAuthorizationsCommandInput,
  ListAppAuthorizationsCommandOutput
>(AppFabricClient, ListAppAuthorizationsCommand, "nextToken", "nextToken", "maxResults");
