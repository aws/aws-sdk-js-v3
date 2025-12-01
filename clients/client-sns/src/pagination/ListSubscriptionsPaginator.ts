// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSubscriptionsCommand,
  ListSubscriptionsCommandInput,
  ListSubscriptionsCommandOutput,
} from "../commands/ListSubscriptionsCommand";
import { SNSClient } from "../SNSClient";
import { SNSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSubscriptions: (
  config: SNSPaginationConfiguration,
  input: ListSubscriptionsCommandInput,
  ...rest: any[]
) => Paginator<ListSubscriptionsCommandOutput> = createPaginator<
  SNSPaginationConfiguration,
  ListSubscriptionsCommandInput,
  ListSubscriptionsCommandOutput
>(SNSClient, ListSubscriptionsCommand, "NextToken", "NextToken", "");
