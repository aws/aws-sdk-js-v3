// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPhoneNumbersV2Command,
  ListPhoneNumbersV2CommandInput,
  ListPhoneNumbersV2CommandOutput,
} from "../commands/ListPhoneNumbersV2Command";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPhoneNumbersV2: (
  config: ConnectPaginationConfiguration,
  input: ListPhoneNumbersV2CommandInput,
  ...rest: any[]
) => Paginator<ListPhoneNumbersV2CommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListPhoneNumbersV2CommandInput,
  ListPhoneNumbersV2CommandOutput
>(ConnectClient, ListPhoneNumbersV2Command, "NextToken", "NextToken", "MaxResults");
