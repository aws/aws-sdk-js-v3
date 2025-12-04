// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProtocolsListsCommand,
  ListProtocolsListsCommandInput,
  ListProtocolsListsCommandOutput,
} from "../commands/ListProtocolsListsCommand";
import { FMSClient } from "../FMSClient";
import { FMSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProtocolsLists: (
  config: FMSPaginationConfiguration,
  input: ListProtocolsListsCommandInput,
  ...rest: any[]
) => Paginator<ListProtocolsListsCommandOutput> = createPaginator<
  FMSPaginationConfiguration,
  ListProtocolsListsCommandInput,
  ListProtocolsListsCommandOutput
>(FMSClient, ListProtocolsListsCommand, "NextToken", "NextToken", "MaxResults");
