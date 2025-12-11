// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListContactsCommand,
  ListContactsCommandInput,
  ListContactsCommandOutput,
} from "../commands/ListContactsCommand";
import { SSMContactsClient } from "../SSMContactsClient";
import { SSMContactsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContacts: (
  config: SSMContactsPaginationConfiguration,
  input: ListContactsCommandInput,
  ...rest: any[]
) => Paginator<ListContactsCommandOutput> = createPaginator<
  SSMContactsPaginationConfiguration,
  ListContactsCommandInput,
  ListContactsCommandOutput
>(SSMContactsClient, ListContactsCommand, "NextToken", "NextToken", "MaxResults");
