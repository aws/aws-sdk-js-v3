// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBillingGroupsCommand,
  ListBillingGroupsCommandInput,
  ListBillingGroupsCommandOutput,
} from "../commands/ListBillingGroupsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBillingGroups: (
  config: IoTPaginationConfiguration,
  input: ListBillingGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListBillingGroupsCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListBillingGroupsCommandInput,
  ListBillingGroupsCommandOutput
>(IoTClient, ListBillingGroupsCommand, "nextToken", "nextToken", "maxResults");
