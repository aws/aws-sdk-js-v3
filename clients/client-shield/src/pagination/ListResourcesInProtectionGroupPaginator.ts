// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResourcesInProtectionGroupCommand,
  ListResourcesInProtectionGroupCommandInput,
  ListResourcesInProtectionGroupCommandOutput,
} from "../commands/ListResourcesInProtectionGroupCommand";
import { ShieldClient } from "../ShieldClient";
import { ShieldPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourcesInProtectionGroup: (
  config: ShieldPaginationConfiguration,
  input: ListResourcesInProtectionGroupCommandInput,
  ...rest: any[]
) => Paginator<ListResourcesInProtectionGroupCommandOutput> = createPaginator<
  ShieldPaginationConfiguration,
  ListResourcesInProtectionGroupCommandInput,
  ListResourcesInProtectionGroupCommandOutput
>(ShieldClient, ListResourcesInProtectionGroupCommand, "NextToken", "NextToken", "MaxResults");
