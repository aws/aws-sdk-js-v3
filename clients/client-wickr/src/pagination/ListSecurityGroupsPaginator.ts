// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSecurityGroupsCommand,
  ListSecurityGroupsCommandInput,
  ListSecurityGroupsCommandOutput,
} from "../commands/ListSecurityGroupsCommand";
import { WickrClient } from "../WickrClient";
import { WickrPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSecurityGroups: (
  config: WickrPaginationConfiguration,
  input: ListSecurityGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListSecurityGroupsCommandOutput> = createPaginator<
  WickrPaginationConfiguration,
  ListSecurityGroupsCommandInput,
  ListSecurityGroupsCommandOutput
>(WickrClient, ListSecurityGroupsCommand, "nextToken", "nextToken", "maxResults");
