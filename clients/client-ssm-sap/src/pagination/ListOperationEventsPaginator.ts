// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOperationEventsCommand,
  ListOperationEventsCommandInput,
  ListOperationEventsCommandOutput,
} from "../commands/ListOperationEventsCommand";
import { SsmSapClient } from "../SsmSapClient";
import { SsmSapPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOperationEvents: (
  config: SsmSapPaginationConfiguration,
  input: ListOperationEventsCommandInput,
  ...rest: any[]
) => Paginator<ListOperationEventsCommandOutput> = createPaginator<
  SsmSapPaginationConfiguration,
  ListOperationEventsCommandInput,
  ListOperationEventsCommandOutput
>(SsmSapClient, ListOperationEventsCommand, "NextToken", "NextToken", "MaxResults");
