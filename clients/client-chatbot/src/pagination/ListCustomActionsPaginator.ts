// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChatbotClient } from "../ChatbotClient";
import {
  ListCustomActionsCommand,
  ListCustomActionsCommandInput,
  ListCustomActionsCommandOutput,
} from "../commands/ListCustomActionsCommand";
import { ChatbotPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCustomActions: (
  config: ChatbotPaginationConfiguration,
  input: ListCustomActionsCommandInput,
  ...rest: any[]
) => Paginator<ListCustomActionsCommandOutput> = createPaginator<
  ChatbotPaginationConfiguration,
  ListCustomActionsCommandInput,
  ListCustomActionsCommandOutput
>(ChatbotClient, ListCustomActionsCommand, "NextToken", "NextToken", "MaxResults");
