// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkspacesCommand,
  ListWorkspacesCommandInput,
  ListWorkspacesCommandOutput,
} from "../commands/ListWorkspacesCommand";
import { GrafanaClient } from "../GrafanaClient";
import { GrafanaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkspaces: (
  config: GrafanaPaginationConfiguration,
  input: ListWorkspacesCommandInput,
  ...rest: any[]
) => Paginator<ListWorkspacesCommandOutput> = createPaginator<
  GrafanaPaginationConfiguration,
  ListWorkspacesCommandInput,
  ListWorkspacesCommandOutput
>(GrafanaClient, ListWorkspacesCommand, "nextToken", "nextToken", "maxResults");
