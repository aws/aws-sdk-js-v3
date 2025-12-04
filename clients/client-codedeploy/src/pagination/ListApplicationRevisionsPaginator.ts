// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeDeployClient } from "../CodeDeployClient";
import {
  ListApplicationRevisionsCommand,
  ListApplicationRevisionsCommandInput,
  ListApplicationRevisionsCommandOutput,
} from "../commands/ListApplicationRevisionsCommand";
import { CodeDeployPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplicationRevisions: (
  config: CodeDeployPaginationConfiguration,
  input: ListApplicationRevisionsCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationRevisionsCommandOutput> = createPaginator<
  CodeDeployPaginationConfiguration,
  ListApplicationRevisionsCommandInput,
  ListApplicationRevisionsCommandOutput
>(CodeDeployClient, ListApplicationRevisionsCommand, "nextToken", "nextToken", "");
