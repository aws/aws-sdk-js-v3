// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRelatedItemsCommand,
  ListRelatedItemsCommandInput,
  ListRelatedItemsCommandOutput,
} from "../commands/ListRelatedItemsCommand";
import { SSMIncidentsClient } from "../SSMIncidentsClient";
import { SSMIncidentsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRelatedItems: (
  config: SSMIncidentsPaginationConfiguration,
  input: ListRelatedItemsCommandInput,
  ...rest: any[]
) => Paginator<ListRelatedItemsCommandOutput> = createPaginator<
  SSMIncidentsPaginationConfiguration,
  ListRelatedItemsCommandInput,
  ListRelatedItemsCommandOutput
>(SSMIncidentsClient, ListRelatedItemsCommand, "nextToken", "nextToken", "maxResults");
