// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListComponentsCommand,
  ListComponentsCommandInput,
  ListComponentsCommandOutput,
} from "../commands/ListComponentsCommand";
import { GreengrassV2Client } from "../GreengrassV2Client";
import { GreengrassV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListComponents: (
  config: GreengrassV2PaginationConfiguration,
  input: ListComponentsCommandInput,
  ...rest: any[]
) => Paginator<ListComponentsCommandOutput> = createPaginator<
  GreengrassV2PaginationConfiguration,
  ListComponentsCommandInput,
  ListComponentsCommandOutput
>(GreengrassV2Client, ListComponentsCommand, "nextToken", "nextToken", "maxResults");
