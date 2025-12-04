// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCatalogItemsCommand,
  ListCatalogItemsCommandInput,
  ListCatalogItemsCommandOutput,
} from "../commands/ListCatalogItemsCommand";
import { OutpostsClient } from "../OutpostsClient";
import { OutpostsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCatalogItems: (
  config: OutpostsPaginationConfiguration,
  input: ListCatalogItemsCommandInput,
  ...rest: any[]
) => Paginator<ListCatalogItemsCommandOutput> = createPaginator<
  OutpostsPaginationConfiguration,
  ListCatalogItemsCommandInput,
  ListCatalogItemsCommandOutput
>(OutpostsClient, ListCatalogItemsCommand, "NextToken", "NextToken", "MaxResults");
