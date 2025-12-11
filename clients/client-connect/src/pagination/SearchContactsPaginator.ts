// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchContactsCommand,
  SearchContactsCommandInput,
  SearchContactsCommandOutput,
} from "../commands/SearchContactsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchContacts: (
  config: ConnectPaginationConfiguration,
  input: SearchContactsCommandInput,
  ...rest: any[]
) => Paginator<SearchContactsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  SearchContactsCommandInput,
  SearchContactsCommandOutput
>(ConnectClient, SearchContactsCommand, "NextToken", "NextToken", "MaxResults");
