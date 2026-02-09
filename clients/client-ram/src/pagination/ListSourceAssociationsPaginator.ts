// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSourceAssociationsCommand,
  ListSourceAssociationsCommandInput,
  ListSourceAssociationsCommandOutput,
} from "../commands/ListSourceAssociationsCommand";
import { RAMClient } from "../RAMClient";
import { RAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSourceAssociations: (
  config: RAMPaginationConfiguration,
  input: ListSourceAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListSourceAssociationsCommandOutput> = createPaginator<
  RAMPaginationConfiguration,
  ListSourceAssociationsCommandInput,
  ListSourceAssociationsCommandOutput
>(RAMClient, ListSourceAssociationsCommand, "nextToken", "nextToken", "maxResults");
