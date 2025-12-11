// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssistantAssociationsCommand,
  ListAssistantAssociationsCommandInput,
  ListAssistantAssociationsCommandOutput,
} from "../commands/ListAssistantAssociationsCommand";
import { WisdomClient } from "../WisdomClient";
import { WisdomPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssistantAssociations: (
  config: WisdomPaginationConfiguration,
  input: ListAssistantAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListAssistantAssociationsCommandOutput> = createPaginator<
  WisdomPaginationConfiguration,
  ListAssistantAssociationsCommandInput,
  ListAssistantAssociationsCommandOutput
>(WisdomClient, ListAssistantAssociationsCommand, "nextToken", "nextToken", "maxResults");
