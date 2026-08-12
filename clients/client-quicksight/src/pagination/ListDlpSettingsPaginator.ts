// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDlpSettingsCommand,
  ListDlpSettingsCommandInput,
  ListDlpSettingsCommandOutput,
} from "../commands/ListDlpSettingsCommand";
import { QuickSightClient } from "../QuickSightClient";
import type { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDlpSettings: (
  config: QuickSightPaginationConfiguration,
  input: ListDlpSettingsCommandInput,
  ...rest: any[]
) => Paginator<ListDlpSettingsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListDlpSettingsCommandInput,
  ListDlpSettingsCommandOutput
>(QuickSightClient, ListDlpSettingsCommand, "NextToken", "NextToken", "MaxResults");
