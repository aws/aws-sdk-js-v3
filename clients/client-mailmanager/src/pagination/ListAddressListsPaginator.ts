// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAddressListsCommand,
  ListAddressListsCommandInput,
  ListAddressListsCommandOutput,
} from "../commands/ListAddressListsCommand";
import { MailManagerClient } from "../MailManagerClient";
import { MailManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAddressLists: (
  config: MailManagerPaginationConfiguration,
  input: ListAddressListsCommandInput,
  ...rest: any[]
) => Paginator<ListAddressListsCommandOutput> = createPaginator<
  MailManagerPaginationConfiguration,
  ListAddressListsCommandInput,
  ListAddressListsCommandOutput
>(MailManagerClient, ListAddressListsCommand, "NextToken", "NextToken", "PageSize");
