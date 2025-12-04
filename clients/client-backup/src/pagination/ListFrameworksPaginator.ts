// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListFrameworksCommand,
  ListFrameworksCommandInput,
  ListFrameworksCommandOutput,
} from "../commands/ListFrameworksCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFrameworks: (
  config: BackupPaginationConfiguration,
  input: ListFrameworksCommandInput,
  ...rest: any[]
) => Paginator<ListFrameworksCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListFrameworksCommandInput,
  ListFrameworksCommandOutput
>(BackupClient, ListFrameworksCommand, "NextToken", "NextToken", "MaxResults");
