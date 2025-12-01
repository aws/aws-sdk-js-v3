// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInstancesCommand,
  ListInstancesCommandInput,
  ListInstancesCommandOutput,
} from "../commands/ListInstancesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInstances: (
  config: ConnectPaginationConfiguration,
  input: ListInstancesCommandInput,
  ...rest: any[]
) => Paginator<ListInstancesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListInstancesCommandInput,
  ListInstancesCommandOutput
>(ConnectClient, ListInstancesCommand, "NextToken", "NextToken", "MaxResults");
