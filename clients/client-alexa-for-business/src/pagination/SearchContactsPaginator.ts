// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  SearchContactsCommand,
  SearchContactsCommandInput,
  SearchContactsCommandOutput,
} from "../commands/SearchContactsCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchContacts: (
  config: AlexaForBusinessPaginationConfiguration,
  input: SearchContactsCommandInput,
  ...rest: any[]
) => Paginator<SearchContactsCommandOutput> = createPaginator<
  AlexaForBusinessPaginationConfiguration,
  SearchContactsCommandInput,
  SearchContactsCommandOutput
>(AlexaForBusinessClient, SearchContactsCommand, "NextToken", "NextToken", "MaxResults");
