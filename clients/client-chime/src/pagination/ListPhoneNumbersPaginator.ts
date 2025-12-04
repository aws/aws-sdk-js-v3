// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeClient } from "../ChimeClient";
import {
  ListPhoneNumbersCommand,
  ListPhoneNumbersCommandInput,
  ListPhoneNumbersCommandOutput,
} from "../commands/ListPhoneNumbersCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPhoneNumbers: (
  config: ChimePaginationConfiguration,
  input: ListPhoneNumbersCommandInput,
  ...rest: any[]
) => Paginator<ListPhoneNumbersCommandOutput> = createPaginator<
  ChimePaginationConfiguration,
  ListPhoneNumbersCommandInput,
  ListPhoneNumbersCommandOutput
>(ChimeClient, ListPhoneNumbersCommand, "NextToken", "NextToken", "MaxResults");
