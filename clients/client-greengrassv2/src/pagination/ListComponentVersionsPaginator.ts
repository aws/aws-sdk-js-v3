// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListComponentVersionsCommand,
  ListComponentVersionsCommandInput,
  ListComponentVersionsCommandOutput,
} from "../commands/ListComponentVersionsCommand";
import { GreengrassV2Client } from "../GreengrassV2Client";
import { GreengrassV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListComponentVersions: (
  config: GreengrassV2PaginationConfiguration,
  input: ListComponentVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListComponentVersionsCommandOutput> = createPaginator<
  GreengrassV2PaginationConfiguration,
  ListComponentVersionsCommandInput,
  ListComponentVersionsCommandOutput
>(GreengrassV2Client, ListComponentVersionsCommand, "nextToken", "nextToken", "maxResults");
