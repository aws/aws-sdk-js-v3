// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListVersionsCommand,
  ListVersionsCommandInput,
  ListVersionsCommandOutput,
} from "../commands/ListVersionsCommand";
import { GrafanaClient } from "../GrafanaClient";
import { GrafanaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVersions: (
  config: GrafanaPaginationConfiguration,
  input: ListVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListVersionsCommandOutput> = createPaginator<
  GrafanaPaginationConfiguration,
  ListVersionsCommandInput,
  ListVersionsCommandOutput
>(GrafanaClient, ListVersionsCommand, "nextToken", "nextToken", "maxResults");
