// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkspaceServiceAccountsCommand,
  ListWorkspaceServiceAccountsCommandInput,
  ListWorkspaceServiceAccountsCommandOutput,
} from "../commands/ListWorkspaceServiceAccountsCommand";
import { GrafanaClient } from "../GrafanaClient";
import { GrafanaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkspaceServiceAccounts: (
  config: GrafanaPaginationConfiguration,
  input: ListWorkspaceServiceAccountsCommandInput,
  ...rest: any[]
) => Paginator<ListWorkspaceServiceAccountsCommandOutput> = createPaginator<
  GrafanaPaginationConfiguration,
  ListWorkspaceServiceAccountsCommandInput,
  ListWorkspaceServiceAccountsCommandOutput
>(GrafanaClient, ListWorkspaceServiceAccountsCommand, "nextToken", "nextToken", "maxResults");
