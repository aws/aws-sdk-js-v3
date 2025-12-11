// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListContactListsCommand,
  ListContactListsCommandInput,
  ListContactListsCommandOutput,
} from "../commands/ListContactListsCommand";
import { SESv2Client } from "../SESv2Client";
import { SESv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContactLists: (
  config: SESv2PaginationConfiguration,
  input: ListContactListsCommandInput,
  ...rest: any[]
) => Paginator<ListContactListsCommandOutput> = createPaginator<
  SESv2PaginationConfiguration,
  ListContactListsCommandInput,
  ListContactListsCommandOutput
>(SESv2Client, ListContactListsCommand, "NextToken", "NextToken", "PageSize");
