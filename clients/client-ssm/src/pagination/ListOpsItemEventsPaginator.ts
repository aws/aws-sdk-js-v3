// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOpsItemEventsCommand,
  ListOpsItemEventsCommandInput,
  ListOpsItemEventsCommandOutput,
} from "../commands/ListOpsItemEventsCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOpsItemEvents: (
  config: SSMPaginationConfiguration,
  input: ListOpsItemEventsCommandInput,
  ...rest: any[]
) => Paginator<ListOpsItemEventsCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  ListOpsItemEventsCommandInput,
  ListOpsItemEventsCommandOutput
>(SSMClient, ListOpsItemEventsCommand, "NextToken", "NextToken", "MaxResults");
