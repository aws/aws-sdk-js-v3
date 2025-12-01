// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInstalledComponentsCommand,
  ListInstalledComponentsCommandInput,
  ListInstalledComponentsCommandOutput,
} from "../commands/ListInstalledComponentsCommand";
import { GreengrassV2Client } from "../GreengrassV2Client";
import { GreengrassV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInstalledComponents: (
  config: GreengrassV2PaginationConfiguration,
  input: ListInstalledComponentsCommandInput,
  ...rest: any[]
) => Paginator<ListInstalledComponentsCommandOutput> = createPaginator<
  GreengrassV2PaginationConfiguration,
  ListInstalledComponentsCommandInput,
  ListInstalledComponentsCommandOutput
>(GreengrassV2Client, ListInstalledComponentsCommand, "nextToken", "nextToken", "maxResults");
