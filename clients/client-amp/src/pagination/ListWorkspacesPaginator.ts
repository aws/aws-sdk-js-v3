// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AmpClient } from "../AmpClient";
import {
  ListWorkspacesCommand,
  ListWorkspacesCommandInput,
  ListWorkspacesCommandOutput,
} from "../commands/ListWorkspacesCommand";
import { AmpPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkspaces: (
  config: AmpPaginationConfiguration,
  input: ListWorkspacesCommandInput,
  ...rest: any[]
) => Paginator<ListWorkspacesCommandOutput> = createPaginator<
  AmpPaginationConfiguration,
  ListWorkspacesCommandInput,
  ListWorkspacesCommandOutput
>(AmpClient, ListWorkspacesCommand, "nextToken", "nextToken", "maxResults");
