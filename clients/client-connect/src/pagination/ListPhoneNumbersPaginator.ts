// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPhoneNumbersCommand,
  ListPhoneNumbersCommandInput,
  ListPhoneNumbersCommandOutput,
} from "../commands/ListPhoneNumbersCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPhoneNumbers: (
  config: ConnectPaginationConfiguration,
  input: ListPhoneNumbersCommandInput,
  ...rest: any[]
) => Paginator<ListPhoneNumbersCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListPhoneNumbersCommandInput,
  ListPhoneNumbersCommandOutput
>(ConnectClient, ListPhoneNumbersCommand, "NextToken", "NextToken", "MaxResults");
