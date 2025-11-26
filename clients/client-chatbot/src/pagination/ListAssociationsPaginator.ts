// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChatbotClient } from "../ChatbotClient";
import {
  ListAssociationsCommand,
  ListAssociationsCommandInput,
  ListAssociationsCommandOutput,
} from "../commands/ListAssociationsCommand";
import { ChatbotPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssociations: (
  config: ChatbotPaginationConfiguration,
  input: ListAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListAssociationsCommandOutput> = createPaginator<
  ChatbotPaginationConfiguration,
  ListAssociationsCommandInput,
  ListAssociationsCommandOutput
>(ChatbotClient, ListAssociationsCommand, "NextToken", "NextToken", "MaxResults");
