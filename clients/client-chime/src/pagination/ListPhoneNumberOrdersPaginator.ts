// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeClient } from "../ChimeClient";
import {
  ListPhoneNumberOrdersCommand,
  ListPhoneNumberOrdersCommandInput,
  ListPhoneNumberOrdersCommandOutput,
} from "../commands/ListPhoneNumberOrdersCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPhoneNumberOrders: (
  config: ChimePaginationConfiguration,
  input: ListPhoneNumberOrdersCommandInput,
  ...rest: any[]
) => Paginator<ListPhoneNumberOrdersCommandOutput> = createPaginator<
  ChimePaginationConfiguration,
  ListPhoneNumberOrdersCommandInput,
  ListPhoneNumberOrdersCommandOutput
>(ChimeClient, ListPhoneNumberOrdersCommand, "NextToken", "NextToken", "MaxResults");
