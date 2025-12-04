// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListArchivesCommand,
  ListArchivesCommandInput,
  ListArchivesCommandOutput,
} from "../commands/ListArchivesCommand";
import { MailManagerClient } from "../MailManagerClient";
import { MailManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListArchives: (
  config: MailManagerPaginationConfiguration,
  input: ListArchivesCommandInput,
  ...rest: any[]
) => Paginator<ListArchivesCommandOutput> = createPaginator<
  MailManagerPaginationConfiguration,
  ListArchivesCommandInput,
  ListArchivesCommandOutput
>(MailManagerClient, ListArchivesCommand, "NextToken", "NextToken", "PageSize");
