// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkspaceServiceAccountTokensCommand,
  ListWorkspaceServiceAccountTokensCommandInput,
  ListWorkspaceServiceAccountTokensCommandOutput,
} from "../commands/ListWorkspaceServiceAccountTokensCommand";
import { GrafanaClient } from "../GrafanaClient";
import { GrafanaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkspaceServiceAccountTokens: (
  config: GrafanaPaginationConfiguration,
  input: ListWorkspaceServiceAccountTokensCommandInput,
  ...rest: any[]
) => Paginator<ListWorkspaceServiceAccountTokensCommandOutput> = createPaginator<
  GrafanaPaginationConfiguration,
  ListWorkspaceServiceAccountTokensCommandInput,
  ListWorkspaceServiceAccountTokensCommandOutput
>(GrafanaClient, ListWorkspaceServiceAccountTokensCommand, "nextToken", "nextToken", "maxResults");
