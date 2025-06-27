// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListContentAssociationsCommand,
  ListContentAssociationsCommandInput,
  ListContentAssociationsCommandOutput,
} from "../commands/ListContentAssociationsCommand";
import { QConnectClient } from "../QConnectClient";
import { QConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContentAssociations: (
  config: QConnectPaginationConfiguration,
  input: ListContentAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListContentAssociationsCommandOutput> = createPaginator<
  QConnectPaginationConfiguration,
  ListContentAssociationsCommandInput,
  ListContentAssociationsCommandOutput
>(QConnectClient, ListContentAssociationsCommand, "nextToken", "nextToken", "maxResults");
