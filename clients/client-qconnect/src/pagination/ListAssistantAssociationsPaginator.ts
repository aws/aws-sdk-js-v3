// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssistantAssociationsCommand,
  ListAssistantAssociationsCommandInput,
  ListAssistantAssociationsCommandOutput,
} from "../commands/ListAssistantAssociationsCommand";
import { QConnectClient } from "../QConnectClient";
import { QConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssistantAssociations: (
  config: QConnectPaginationConfiguration,
  input: ListAssistantAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListAssistantAssociationsCommandOutput> = createPaginator<
  QConnectPaginationConfiguration,
  ListAssistantAssociationsCommandInput,
  ListAssistantAssociationsCommandOutput
>(QConnectClient, ListAssistantAssociationsCommand, "nextToken", "nextToken", "maxResults");
