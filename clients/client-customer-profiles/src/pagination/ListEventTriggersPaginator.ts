// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEventTriggersCommand,
  ListEventTriggersCommandInput,
  ListEventTriggersCommandOutput,
} from "../commands/ListEventTriggersCommand";
import { CustomerProfilesClient } from "../CustomerProfilesClient";
import { CustomerProfilesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEventTriggers: (
  config: CustomerProfilesPaginationConfiguration,
  input: ListEventTriggersCommandInput,
  ...rest: any[]
) => Paginator<ListEventTriggersCommandOutput> = createPaginator<
  CustomerProfilesPaginationConfiguration,
  ListEventTriggersCommandInput,
  ListEventTriggersCommandOutput
>(CustomerProfilesClient, ListEventTriggersCommand, "NextToken", "NextToken", "MaxResults");
