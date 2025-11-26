// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListArchiveExportsCommand,
  ListArchiveExportsCommandInput,
  ListArchiveExportsCommandOutput,
} from "../commands/ListArchiveExportsCommand";
import { MailManagerClient } from "../MailManagerClient";
import { MailManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListArchiveExports: (
  config: MailManagerPaginationConfiguration,
  input: ListArchiveExportsCommandInput,
  ...rest: any[]
) => Paginator<ListArchiveExportsCommandOutput> = createPaginator<
  MailManagerPaginationConfiguration,
  ListArchiveExportsCommandInput,
  ListArchiveExportsCommandOutput
>(MailManagerClient, ListArchiveExportsCommand, "NextToken", "NextToken", "PageSize");
