// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMembersOfAddressListCommand,
  ListMembersOfAddressListCommandInput,
  ListMembersOfAddressListCommandOutput,
} from "../commands/ListMembersOfAddressListCommand";
import { MailManagerClient } from "../MailManagerClient";
import { MailManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMembersOfAddressList: (
  config: MailManagerPaginationConfiguration,
  input: ListMembersOfAddressListCommandInput,
  ...rest: any[]
) => Paginator<ListMembersOfAddressListCommandOutput> = createPaginator<
  MailManagerPaginationConfiguration,
  ListMembersOfAddressListCommandInput,
  ListMembersOfAddressListCommandOutput
>(MailManagerClient, ListMembersOfAddressListCommand, "NextToken", "NextToken", "PageSize");
