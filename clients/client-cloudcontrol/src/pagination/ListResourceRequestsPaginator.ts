// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudControlClient } from "../CloudControlClient";
import {
  ListResourceRequestsCommand,
  ListResourceRequestsCommandInput,
  ListResourceRequestsCommandOutput,
} from "../commands/ListResourceRequestsCommand";
import { CloudControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourceRequests: (
  config: CloudControlPaginationConfiguration,
  input: ListResourceRequestsCommandInput,
  ...rest: any[]
) => Paginator<ListResourceRequestsCommandOutput> = createPaginator<
  CloudControlPaginationConfiguration,
  ListResourceRequestsCommandInput,
  ListResourceRequestsCommandOutput
>(CloudControlClient, ListResourceRequestsCommand, "NextToken", "NextToken", "MaxResults");
