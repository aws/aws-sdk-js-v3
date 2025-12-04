// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListTieringConfigurationsCommand,
  ListTieringConfigurationsCommandInput,
  ListTieringConfigurationsCommandOutput,
} from "../commands/ListTieringConfigurationsCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTieringConfigurations: (
  config: BackupPaginationConfiguration,
  input: ListTieringConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListTieringConfigurationsCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListTieringConfigurationsCommandInput,
  ListTieringConfigurationsCommandOutput
>(BackupClient, ListTieringConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
