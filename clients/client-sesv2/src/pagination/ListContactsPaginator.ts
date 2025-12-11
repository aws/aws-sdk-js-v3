// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListContactsCommand,
  ListContactsCommandInput,
  ListContactsCommandOutput,
} from "../commands/ListContactsCommand";
import { SESv2Client } from "../SESv2Client";
import { SESv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContacts: (
  config: SESv2PaginationConfiguration,
  input: ListContactsCommandInput,
  ...rest: any[]
) => Paginator<ListContactsCommandOutput> = createPaginator<
  SESv2PaginationConfiguration,
  ListContactsCommandInput,
  ListContactsCommandOutput
>(SESv2Client, ListContactsCommand, "NextToken", "NextToken", "PageSize");
