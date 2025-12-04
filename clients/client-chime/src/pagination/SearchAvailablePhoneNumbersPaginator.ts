// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeClient } from "../ChimeClient";
import {
  SearchAvailablePhoneNumbersCommand,
  SearchAvailablePhoneNumbersCommandInput,
  SearchAvailablePhoneNumbersCommandOutput,
} from "../commands/SearchAvailablePhoneNumbersCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchAvailablePhoneNumbers: (
  config: ChimePaginationConfiguration,
  input: SearchAvailablePhoneNumbersCommandInput,
  ...rest: any[]
) => Paginator<SearchAvailablePhoneNumbersCommandOutput> = createPaginator<
  ChimePaginationConfiguration,
  SearchAvailablePhoneNumbersCommandInput,
  SearchAvailablePhoneNumbersCommandOutput
>(ChimeClient, SearchAvailablePhoneNumbersCommand, "NextToken", "NextToken", "MaxResults");
