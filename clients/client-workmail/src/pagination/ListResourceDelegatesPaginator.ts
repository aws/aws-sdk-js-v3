// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResourceDelegatesCommand,
  ListResourceDelegatesCommandInput,
  ListResourceDelegatesCommandOutput,
} from "../commands/ListResourceDelegatesCommand";
import { WorkMailClient } from "../WorkMailClient";
import { WorkMailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourceDelegates: (
  config: WorkMailPaginationConfiguration,
  input: ListResourceDelegatesCommandInput,
  ...rest: any[]
) => Paginator<ListResourceDelegatesCommandOutput> = createPaginator<
  WorkMailPaginationConfiguration,
  ListResourceDelegatesCommandInput,
  ListResourceDelegatesCommandOutput
>(WorkMailClient, ListResourceDelegatesCommand, "NextToken", "NextToken", "MaxResults");
