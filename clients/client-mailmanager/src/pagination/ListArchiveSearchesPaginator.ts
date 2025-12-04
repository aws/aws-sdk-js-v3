// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListArchiveSearchesCommand,
  ListArchiveSearchesCommandInput,
  ListArchiveSearchesCommandOutput,
} from "../commands/ListArchiveSearchesCommand";
import { MailManagerClient } from "../MailManagerClient";
import { MailManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListArchiveSearches: (
  config: MailManagerPaginationConfiguration,
  input: ListArchiveSearchesCommandInput,
  ...rest: any[]
) => Paginator<ListArchiveSearchesCommandOutput> = createPaginator<
  MailManagerPaginationConfiguration,
  ListArchiveSearchesCommandInput,
  ListArchiveSearchesCommandOutput
>(MailManagerClient, ListArchiveSearchesCommand, "NextToken", "NextToken", "PageSize");
