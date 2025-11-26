// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInstancesCommand,
  ListInstancesCommandInput,
  ListInstancesCommandOutput,
} from "../commands/ListInstancesCommand";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInstances: (
  config: SSOAdminPaginationConfiguration,
  input: ListInstancesCommandInput,
  ...rest: any[]
) => Paginator<ListInstancesCommandOutput> = createPaginator<
  SSOAdminPaginationConfiguration,
  ListInstancesCommandInput,
  ListInstancesCommandOutput
>(SSOAdminClient, ListInstancesCommand, "NextToken", "NextToken", "MaxResults");
