// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProtectionGroupsCommand,
  ListProtectionGroupsCommandInput,
  ListProtectionGroupsCommandOutput,
} from "../commands/ListProtectionGroupsCommand";
import { ShieldClient } from "../ShieldClient";
import { ShieldPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProtectionGroups: (
  config: ShieldPaginationConfiguration,
  input: ListProtectionGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListProtectionGroupsCommandOutput> = createPaginator<
  ShieldPaginationConfiguration,
  ListProtectionGroupsCommandInput,
  ListProtectionGroupsCommandOutput
>(ShieldClient, ListProtectionGroupsCommand, "NextToken", "NextToken", "MaxResults");
