// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListStandardsControlAssociationsCommand,
  ListStandardsControlAssociationsCommandInput,
  ListStandardsControlAssociationsCommandOutput,
} from "../commands/ListStandardsControlAssociationsCommand";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStandardsControlAssociations: (
  config: SecurityHubPaginationConfiguration,
  input: ListStandardsControlAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListStandardsControlAssociationsCommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  ListStandardsControlAssociationsCommandInput,
  ListStandardsControlAssociationsCommandOutput
>(SecurityHubClient, ListStandardsControlAssociationsCommand, "NextToken", "NextToken", "MaxResults");
