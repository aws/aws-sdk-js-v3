// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeLDAPSSettingsCommand,
  DescribeLDAPSSettingsCommandInput,
  DescribeLDAPSSettingsCommandOutput,
} from "../commands/DescribeLDAPSSettingsCommand";
import { DirectoryServiceClient } from "../DirectoryServiceClient";
import { DirectoryServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeLDAPSSettings: (
  config: DirectoryServicePaginationConfiguration,
  input: DescribeLDAPSSettingsCommandInput,
  ...rest: any[]
) => Paginator<DescribeLDAPSSettingsCommandOutput> = createPaginator<
  DirectoryServicePaginationConfiguration,
  DescribeLDAPSSettingsCommandInput,
  DescribeLDAPSSettingsCommandOutput
>(DirectoryServiceClient, DescribeLDAPSSettingsCommand, "NextToken", "NextToken", "Limit");
