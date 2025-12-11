// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchAvailablePhoneNumbersCommand,
  SearchAvailablePhoneNumbersCommandInput,
  SearchAvailablePhoneNumbersCommandOutput,
} from "../commands/SearchAvailablePhoneNumbersCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchAvailablePhoneNumbers: (
  config: ConnectPaginationConfiguration,
  input: SearchAvailablePhoneNumbersCommandInput,
  ...rest: any[]
) => Paginator<SearchAvailablePhoneNumbersCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  SearchAvailablePhoneNumbersCommandInput,
  SearchAvailablePhoneNumbersCommandOutput
>(ConnectClient, SearchAvailablePhoneNumbersCommand, "NextToken", "NextToken", "MaxResults");
