// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListRelaysCommand, ListRelaysCommandInput, ListRelaysCommandOutput } from "../commands/ListRelaysCommand";
import { MailManagerClient } from "../MailManagerClient";
import { MailManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRelays: (
  config: MailManagerPaginationConfiguration,
  input: ListRelaysCommandInput,
  ...rest: any[]
) => Paginator<ListRelaysCommandOutput> = createPaginator<
  MailManagerPaginationConfiguration,
  ListRelaysCommandInput,
  ListRelaysCommandOutput
>(MailManagerClient, ListRelaysCommand, "NextToken", "NextToken", "PageSize");
