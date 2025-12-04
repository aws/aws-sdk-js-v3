// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeBuildClient } from "../CodeBuildClient";
import { ListBuildsCommand, ListBuildsCommandInput, ListBuildsCommandOutput } from "../commands/ListBuildsCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBuilds: (
  config: CodeBuildPaginationConfiguration,
  input: ListBuildsCommandInput,
  ...rest: any[]
) => Paginator<ListBuildsCommandOutput> = createPaginator<
  CodeBuildPaginationConfiguration,
  ListBuildsCommandInput,
  ListBuildsCommandOutput
>(CodeBuildClient, ListBuildsCommand, "nextToken", "nextToken", "");
